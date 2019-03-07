import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { defaultTheme } from '../Theme'
import ScreenReaderOnly from '../ScreenReaderOnly'

const DefaultTable = styled.table`
  width: 100%;
  font-size: 1em;
  line-height: 1em;
  padding: 0.5em 0.25em;
  border-collapse: collapse;

  th,
  td {
    padding: 0.5em 0.25em;
    vertical-align: top;
    text-align: left;
  }

  thead {
    background-color: ${props => props.theme.colorBackground};
  }

  thead tr:not(:only-child) {
    border-bottom: 4px solid ${props => props.theme.colorBackgroundLight};
  }

  thead tr:first-child:not(:only-child) th {
    padding: 0.75em;
    font-size: 1.25em;
    text-align: center;
    font-weight: normal;
    border-right: 4px solid ${props => props.theme.colorBackgroundLight};
  }

  thead tr:first-child:not(:only-child) th:last-child {
    border-right: none;
  }

  thead th {
    font-weight: bold;
  }

  tbody th,
  tfoot th {
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

  th,
  td {
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

  tbody th:first-child,
  tbody td:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  tbody td:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

class Table extends Component {
  constructor(props) {
    super(props)
    const metaData = this.buildMetaData(props.headers, props.data)
    this.state = {
      metaData: metaData,
    }

    this.renderHeaders = this.renderHeaders.bind(this)
    this.renderHeaderRow = this.renderHeaderRow.bind(this)
    this.renderRows = this.renderRows.bind(this)
    this.renderTotals = this.renderTotals.bind(this)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const metaData = this.buildMetaData(nextProps.headers, nextProps.data)
    this.setState({
      metaData: metaData,
    })
  }

  buildMetaData(headers, data) {
    // Get data types and calculate totals
    let metaData = {}
    headers.forEach(headerRow => {
      headerRow.forEach(header => {
        const key = header.key
        const type = header.type || 'string'
        metaData[key] = { type: type }
        if (type === 'int') {
          metaData[key]['total'] = 0
        }
      })
    })
    data.forEach(row => {
      headers.forEach(headerRow => {
        headerRow.forEach(header => {
          const key = header.key
          if (metaData[key].type === 'int') {
            metaData[key].total += parseInt(row[key], 10)
          }
        })
      })
    })

    return metaData
  }

  renderHeaders(headers) {
    return headers.map((headerRow, i) => {
      return <tr key={`data-table-header-${i}`}>{this.renderHeaderRow(headerRow)}</tr>
    })
  }

  renderHeaderRow(headerRow) {
    return headerRow.map((header, i) => {
      return (
        <th
          scope="col"
          key={`data-table-header-row-${i}`}
          colSpan={header.colspan}
        >
          {header.label}
        </th>
      )
    })
  }

  renderRows(rowHeaders, data) {
    let headers = rowHeaders[rowHeaders.length - 1]
    return data.map((row, i) => {
      const cells = headers.map((header, j) => {
        const itemKey = `data-table-cell-${i}-${j}`
        if (j === 0) {
          return (
            <th scope="row" key={itemKey} className={header.key} colSpan={header.colspan}>
              {row[header.key]}
            </th>
          )
        } else {
          return (
            <td key={itemKey} className={header.key} colSpan={header.colspan}>
              {row[header.key]}
            </td>
          )
        }
      })

      return <tr key={`data-table-row-${i}`}>{cells}</tr>
    })
  }

  renderTotals(rowHeaders) {
    let headers = rowHeaders[rowHeaders.length - 1]
    const { metaData } = this.state

    return headers.map((header, i) => {
      if (i === 0) {
        return (
          <th scope="row" key={`data-table-footer-${i}`}>
            Total
          </th>
        )
      }
      const type = this.state.metaData[header.key].type
      if (type !== 'int') {
        return <td key={`data-table-footer-${i}`} />
      } else {
        return (
          <td key={`data-table-footer-${i}`}>
            {metaData[header.key].total}
          </td>
        )
      }
    })
  }

  render() {
    const { headers, data, includeTotal, caption, type, theme, ...otherProps } = this.props

    const Root = type === 'list' ? ListTable : DefaultTable

    if (headers.length === 0) {
      return <Root className="hw-table" theme={theme} {...otherProps} />
    } else {
      return (
        <Root className="hw-table" theme={theme} {...otherProps}>
          <caption className="hw-table-caption">
            <ScreenReaderOnly>{caption}</ScreenReaderOnly>
          </caption>
          <thead>{this.renderHeaders(headers)}</thead>
          <tbody>{this.renderRows(headers, data)}</tbody>
          {includeTotal && (
            <tfoot>
              <tr>{this.renderTotals(headers)}</tr>
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
  })
}

Table.defaultProTypes = {
  includeTotal: false,
  type: 'data',
  theme: defaultTheme,
}

export default Table
export { dataPropShape, headersPropShape }
