import React, { useState } from 'react';
import DrillParentComponent from './DrillParentComponent';

const DrillGrandparentComponent = () => {
  const [data, setData] = useState(0);
  const [message, setMessage] = useState('');
  return (
    <div>
      <h1>Grandparent Component</h1>
      <br/>
      <button onClick={()=>setData(data+1)}>click button</button>
      <br/>
      <br/>
      Grandparent typing: 
      <input placeholder='Enter the message...' onChange={(e) => setMessage(e.target.value)}></input>
      <DrillParentComponent data={data} message={message}/>
    </div>
  )
}

export default DrillGrandparentComponent