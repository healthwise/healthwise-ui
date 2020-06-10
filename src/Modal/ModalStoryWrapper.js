import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

class ModalContainer extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClick() {
    this.setState({
      open: !this.state.open,
    })
  }

  handleClose() {
    this.setState({
      open: false,
    })
  }

  render() {
    const props = {
      open: this.state.open,
      onClose: this.handleClose,
    }

    return (
      <Fragment>
        <Button rounded onClick={this.handleClick}>
          Open Modal
        </Button>
        {React.cloneElement(this.props.children, props)}
      </Fragment>
    )
  }
}

ModalContainer.propTypes = {
  children: PropTypes.any,
}

export default ModalContainer
