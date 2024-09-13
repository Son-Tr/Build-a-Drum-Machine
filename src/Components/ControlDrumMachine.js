import React from 'react'
import { useSelector } from 'react-redux'

function ControlDrumMachine() {
    const currentDrumPadName =useSelector(state=> state.currentDrumPadName)
  return (
    <div className='control-drum'>
        <h2 id='display'>{currentDrumPadName}</h2>

    </div>
  )
}

export default ControlDrumMachine