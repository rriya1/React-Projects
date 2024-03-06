import React from 'react'
import "./BasicCard.scss"

function BasicCard({ id, children,extraName }) {
  return (
    <div>
      <div className={`card card${id} ${extraName}`}>
      {children}
    </div>
    </div>
  )
}

export default BasicCard
//<div className={`card card${id}`}>