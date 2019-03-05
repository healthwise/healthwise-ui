import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Modal from './index'
import Button from '../Button'

class ModalContainer extends Component {
  constructor(props) {
    super(props)
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

storiesOf('core|Components/Modal', module)
  .add('with defaults', () => (
    <ModalContainer>
      <Modal
        title="Lorem ipsum dolor sit amet"
        onEnter={action('onEnter')}
        onEntered={action('onEntered')}
        onExit={action('onExit')}
        onExited={action('onExited')}
      />
    </ModalContainer>
  ), {
  info: `Demonstrates default rendering of Modal component`
})
  .add('with content', () => (
    <ModalContainer>
      <Modal
        title="Lorem ipsum dolor sit amet"
        onEnter={action('onEnter')}
        onEntered={action('onEntered')}
        onExit={action('onExit')}
        onExited={action('onExited')}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </Modal>
    </ModalContainer>
  ), {
  info: `Demonstrates a Modal with content`
})
  .add('with actions', () => (
    <ModalContainer>
      <Modal
        title="Are you sure you want to delete?"
        onEnter={action('onEnter')}
        onEntered={action('onEntered')}
        onExit={action('onExit')}
        onExited={action('onExited')}
        actions={[
          <Button key="action-1" color="primary" rounded>
            Accept
          </Button>,
          <Button key="action-2" color="neutralDark" flat>
            Cancel
          </Button>,
        ]}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </Modal>
    </ModalContainer>
  ), {
  info: `Demonstrates a Modal with actions`
})
