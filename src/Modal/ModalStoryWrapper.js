import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

class ModalContainer extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  handleClose() {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    const props = {
      isOpen: this.state.isOpen,
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
