import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const message = 'Hello, world!';
  const count = 42;
  const arr = [1,2,3];
  return <ChildComponent message={message} count={count} arr={arr} />;
};

export default ParentComponent;