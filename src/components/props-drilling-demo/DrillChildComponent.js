import React from 'react'

const DrillChildComponent = ({data, message}) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Data from Grandparent: {data}</p>
      <p>Grandchild Reading: {message}</p>
    </div>
  )
}

export default DrillChildComponent