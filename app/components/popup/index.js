import React from 'react'
import './popup.less'

class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.handlePopupOpenClick = this.handlePopupOpenClick.bind(this)
    this.handlePopupCloseClick = this.handlePopupCloseClick.bind(this)
  }

  componentDidMount() {
    if (typeof document === 'undefined') {
      return null
    }

    const buttons = document.getElementsByClassName(this.props.target)
    for (const button of buttons) {
      button.onclick = this.handlePopupOpenClick
    }
  }

  switchBodyOverflow() {
    if (typeof document === 'undefined') {
      return null
    }

    const body = document.querySelector('body')
    if (this.state.isOpen) {
      body.style.overflow = 'hidden'
    } else {
      body.removeAttribute('style')
    }
  }

  handlePopupOpenClick() {
    this.setState({ isOpen: true })
  }

  handlePopupCloseClick() {
    this.setState({ isOpen: false })
  }

  handleOutsideClick = e => {
    const target = e.target.classList.value

    if (target.includes('popup')) {
      this.handlePopupCloseClick()
    }
  }

  render() {
    let popUpClass = this.state.isOpen ? 'popup--open' : 'popup--close'
    const className = `popup ${popUpClass}`
    this.switchBodyOverflow()

    return (
      <div
        className={className}
        onClick={this.handleOutsideClick}
        data-popup-id={this.props.popupId}
      >
        <div className="popup__container">{this.props.children}</div>
      </div>
    )
  }
}

export default Popup
