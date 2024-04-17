import React from 'react';
import DrillChildComponent from './DrillChildComponent';

const DrillParentComponent = ({data, message}) => {
  return (
    <div>
      <h2>Parent Component</h2>
      <DrillChildComponent data={data} message={message} />
    </div>
  )
}

export default DrillParentComponent