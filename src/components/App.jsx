import React from 'react';
import Form from './Form';

let isLoggedIn = true

function renderConditionally() {
  if (isLoggedIn === false) {
    return <h1>Hello</h1>
  } else {
    return (
      <Form />
    )
  }
}


function App() {
  return (
    <div className="container">
      {renderConditionally()}
    </div>
  );
}

export default App;
