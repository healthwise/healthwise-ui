import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { defaultTheme } from '../Theme'
import ScreenReaderOnly from '../ScreenReaderOnly'

// Map data type of a cell to text-align value
const dataTypeTextAlignMap = dataType => {
  switch (dataType) {
    case 'int':
    case 'centered':
      return 'center'
    default:
      return 'left'
  }
}

// Cell is used for both <td> and <th> elements
const Cell = styled.td`
  padding: 0.5em 0.25em;
  vertical-align: top;
  text-align: ${props => dataTypeTextAlignMap(props.dataType)};
  word-break: ${props => (props.dataType === 'id' ? 'break-all' : 'normal')};
`

const DefaultTable = styled.table`
  width: 100%;
  font-size: 1em;
  line-height: 1em;
  padding: 0.5em 0.25em;
  border-collapse: collapse;

  thead {
    background-color: ${props => props.theme.colorBackground};
  }

  thead tr:not(:only-child) {
    border-bottom: 4px solid ${props => props.theme.colorBackgroundLight};
  }

  thead tr:first-child:not(:only-child) ${Cell} {
    padding: 0.75em;
    font-size: 1.25em;
    text-align: center;
    font-weight: normal;
    border-right: 4px solid ${props => props.theme.colorBackgroundLight};
  }

  thead tr:first-child:not(:only-child) ${Cell}:last-child {
    border-right: none;
  }

  thead ${Cell} {
    font-weight: bold;
  }

  tbody ${Cell}, tfoot ${Cell} {
    font-weight: normal;
  }

  tbody tr {
    border-bottom: 1px solid ${props => props.theme.colorBorder};
  }

  tbody tr:last-child {
    border-bottom: none;
  }

  tfoot tr {
    border-top: 2px solid ${props => props.theme.colorBorder};
    border-bottom: none;
  }
`

const ListTable = styled(DefaultTable)`
  border-collapse: separate;
  border-spacing: 0 4px;

  ${Cell} {
    padding: 0.5em;
    vertical-align: middle;
  }

  thead,
  thead tr {
    background-color: transparent;
  }

  thead tr:first-child:not(:only-child) {
    background-color: ${props => props.theme.colorBackgroundContrastLight};
  }

  tbody tr {
    background-color: ${props => props.theme.colorBackgroundLight};
  }

  tbody ${Cell}:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  tbody ${Cell}:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totals: this.calculateTotals(props.headers, props.data),
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      totals: this.calculateTotals(nextProps.headers, nextProps.data),
    })
  }

  // Calculate totals if column is type int
  calculateTotals(headers, data) {
    // Flatten multi-dimensional headers array to an object
    const headersObj = headers.reduce((obj, headersRow) => {
      headersRow.forEach(header => {
        obj[header.key] = header
      })
      return obj
    }, {})

    const totals = data.reduce((totalsObj, row) => {
      Object.entries(row).forEach(([key, value]) => {
        if (headersObj[key] && headersObj[key].type === 'int') {
          totalsObj[key] = (totalsObj[key] || 0) + parseInt(value, 10)
        }
      })
      return totalsObj
    }, {})

    return totals
  }

  render() {
    const { headers, data, includeTotal, caption, type, theme, ...otherProps } = this.props

    const { totals } = this.state
    const Root = type === 'list' ? ListTable : DefaultTable

    if (headers.length === 0) {
      return <Root className="hw-table" theme={theme} {...otherProps} />
    } else {
      return (
        <Root className="hw-table" theme={theme} {...otherProps}>
          <caption className="hw-table-caption">
            <ScreenReaderOnly>{caption}</ScreenReaderOnly>
          </caption>
          <thead>
            {headers.map((headerRow, i) => (
              <tr key={`data-table-header-${i}`}>
                {headerRow.map((header, i) => (
                  <Cell
                    as="th"
                    scope="col"
                    key={`data-table-header-row-${i}`}
                    colSpan={header.colspan}
                    dataType={header.type || 'string'}
                  >
                    {header.label}
                  </Cell>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={`data-table-row-${i}`}>
                {headers[headers.length - 1].map((header, j) => (
                  <Cell
                    as={j === 0 ? 'th' : 'td'}
                    scope={j === 0 ? 'row' : null}
                    key={`data-table-cell-${i}-${j}`}
                    className={header.key}
                    colSpan={header.colspan}
                    dataType={header.type || 'string'}
                  >
                    {row[header.key]}
                  </Cell>
                ))}
              </tr>
            ))}
          </tbody>
          {includeTotal && (
            <tfoot>
              <tr>
                {headers[headers.length - 1].map((header, i) =>
                  i === 0 ? (
                    <Cell as="th" scope="row" key={`data-table-footer-${i}`}>
                      Total
                    </Cell>
                  ) : (
                    <Cell key={`data-table-footer-${i}`} dataType="int">
                      {totals[header.key]}
                    </Cell>
                  )
                )}
              </tr>
            </tfoot>
          )}
        </Root>
      )
    }
  }
}

const headersPropShape = PropTypes.arrayOf(
  PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    colspan: PropTypes.int,
  }).isRequired
)

const dataPropShape = PropTypes.arrayOf(PropTypes.object)

Table.propTypes = {
  headers: PropTypes.arrayOf(headersPropShape).isRequired,
  data: dataPropShape.isRequired,
  caption: PropTypes.string.isRequired,
  includeTotal: PropTypes.bool,
  type: PropTypes.oneOf(['data', 'list']),
  theme: PropTypes.shape({
    colorBackgroundLight: PropTypes.string,
    colorBackground: PropTypes.string,
    colorBackgroundContrastLight: PropTypes.string,
    colorBorder: PropTypes.string,
  }),
}

Table.defaultProps = {
  includeTotal: false,
  type: 'data',
  theme: defaultTheme,
}

export default Table
export { dataPropShape, headersPropShape }
