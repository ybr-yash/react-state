import React, { useState } from 'react'

const StateComponent = () => {
  const [counter, setCounter] = useState(0)
  const [text, setText] = useState('Default text')

  return (
    <>
    <h1>useState Demo</h1>
    You clicked the button {counter} times!
    <br/>
    <button onClick={()=>setCounter(counter+1)}>click button</button>
    <br/>
    <br/>
    <br/>
    {text}
    <br/>
    <input placeholder='Enter the text...' onChange={(e) => setText(e.target.value)}></input>
    </>
  )
}

export default StateComponent