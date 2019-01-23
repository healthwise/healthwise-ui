import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const styles = {
  root: {
    flexGrow: 1,
  },
}

const MenuAppBar = props => {
  const { children, position } = props
  return (
    <div className={styles.root}>
      <AppBar position={position}>
        <Toolbar>{!!children && children}</Toolbar>
      </AppBar>
    </div>
  )
}

MenuAppBar.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['fixed', 'absolute', 'sticky', 'static']),
}

MenuAppBar.defaultProps = {
  position: 'static',
}

export default MenuAppBar
