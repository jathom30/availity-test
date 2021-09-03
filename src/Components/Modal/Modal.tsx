import React from 'react'
import './Modal.scss'

export const Modal: React.FC<{ offClick?: () => void }> = ({ offClick, children }) => {
  return (
    <div className="Modal">
      <div className="Modal__off-click" role="button" onClick={offClick} />
      <div className="Modal__content">
        {children}
      </div>
    </div>
  )
}
