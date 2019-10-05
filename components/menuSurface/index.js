import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import './menu-surface.less'
import ArrowSvg from './images/arrow.svg'

const MenuSurface = ({ header, body, withArrow = true }) => {
  const [isOpen, setStatus] = useState(false)

  const className = isOpen
    ? 'menu-surface menu-surface--open'
    : 'menu-surface menu-surface--closed'

  return (
    <div className={className}>
      <OutsideClickHandler onOutsideClick={() => setStatus(false)}>
        <div
          className="menu-surface__header"
          onClick={() => setStatus(!isOpen)}
        >
          {header}
          {withArrow && (
            <ArrowSvg className={'menu-surface__arrow'} alt={'toggle'} />
          )}
        </div>
        <div className="menu-surface__body">{body}</div>
      </OutsideClickHandler>
    </div>
  )
}

export default MenuSurface
