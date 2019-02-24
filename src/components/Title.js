import React from 'react';

const Title = props =>
    <div>
      <h1>To do:</h1>
      <p>{props.elementsLength} tasks</p>
    </div>

export default Title;

/// function Title(props) {
//    return (
//        <h1>{props.title}</h1>
 //   )
//}