import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

class Web3ERC20TokenBalance extends React.Component {
  constructor(props) {
    super(props)

    while (this.props.domElement.firstChild) {
      this.props.domElement.removeChild(
        this.props.domElement.firstChild,
      )
    }
  }
      

  render() {
    return ReactDOM.createPortal(
      <Fragment>{this.props.balance}</Fragment>,
      document.getElementById(this.props.domElement.id),
    )
  }
}

export default Web3ERC20TokenBalance
