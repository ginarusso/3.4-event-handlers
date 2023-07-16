// Create a new input called PriceInput and it should be able to change the value of the displayed price.

// Make sure to also add validation preventing negative values.

import React, {useState} from 'react'
import './styles.css'

const App = () => {

let [priceInput, setPriceInput] = useState()
let [errorMessage, setErrorMessage] = useState("")

function handlePrice(e) {
  if (e.target.value >= 0) {
    setPriceInput(e.target.value)
    setErrorMessage('')
  } else {
    setErrorMessage('Please enter a non-negative value.')
  }
}
  return (
    <>
<div className = 'container'>
  <h2>Input a price amount</h2>
  <h3>${priceInput}</h3>
  <input 
  type = 'number'
  value = {priceInput}
  onChange = {handlePrice}
  placeholder = 'positive numbers!'
  />
  {errorMessage && <p className='error'>{errorMessage}</p>}
</div>
    </>
  )
}

export default App