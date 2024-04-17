import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      <p>Message: {props.message}</p>
      <p>Count: {props.count}</p>
      <p>Array: {props.arr}</p>
      <p>Array's first element: {props.arr[0]}</p>
    </div>
  )
}

ChildComponent.defaultProps = {
    message: 'Default message',
    count: 0,
    arr: [100,200,300],
  };

export default ChildComponent;