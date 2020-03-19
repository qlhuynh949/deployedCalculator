import React from 'react'

const KeyButton = props => {
  return (
    <button onClick={() => props.handleKey(props.keyItem)}>{props.keyItem}</button>
  )
}

export default KeyButton