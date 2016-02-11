import React, { Component, PropTypes } from 'react'
import '../styles/core.scss'

class CoreLayout extends Component {
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}
CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
