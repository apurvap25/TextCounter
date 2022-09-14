import React from 'react'
import { isElementOfType } from 'react-dom/test-utils'

export default function TextForm(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
  <textarea class="form-control" id="myBox" rows="8"></textarea>
</div>
    
  )
}

