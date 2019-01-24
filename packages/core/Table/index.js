import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import ScreenReaderOnly from '../ScreenReaderOnly'
import styles from './Table.css'

const typeClassMap = {
  string: '',
  date: styles.date,
  int: styles.int,
  id: styles.id,
  centered: styles.centered,
}

class Table extends Component {
  constructor(props) {
    super(props)
    const metaData = this.buildMetaData(props.headers, props.data)
    this.state = {
      metaData: metaData,
    }

    this.getTypeClass = this.getTypeClass.bind(this)
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

  getTypeClass(cell) {
    const { metaData } = this.state
    return typeClassMap[metaData[cell.key].type]
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
          className={this.getTypeClass(header)}
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
        const rowClassNames = classNames(this.getTypeClass(header), header.key)
        if (j === 0) {
          return (
            <th scope="row" key={itemKey} className={rowClassNames} colSpan={header.colspan}>
              {row[header.key]}
            </th>
          )
        } else {
          const cellClassNames = classNames(this.getTypeClass(header), header.key)
          return (
            <td key={itemKey} className={cellClassNames} colSpan={header.colspan}>
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
          <td key={`data-table-footer-${i}`} className={this.getTypeClass(header)}>
            {metaData[header.key].total}
          </td>
        )
      }
    })
  }

  render(props) {
    const { headers, data, includeTotal, caption, type, ...otherProps } = this.props
    const className = classNames({
      'hw-table': true,
      [styles.Table]: true,
      [styles.list]: type === 'list',
    })
    if (headers.length === 0) {
      return <table className={className} {...otherProps} />
    } else {
      return (
        <table className={className} {...otherProps}>
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
        </table>
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
}

Table.defaultProTypes = {
  includeTotal: false,
  type: 'data',
}

export default Table
export { dataPropShape, headersPropShape }
