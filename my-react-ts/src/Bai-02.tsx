import React, { Component } from 'react';

function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  function tick() {
    return(<Clock date={new Date()} />);
  }
  
  setInterval(tick, 1000);

export default Clock;
