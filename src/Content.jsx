import beach from "./beach.jpg";
import React from "react";
import "./beach.css"

function Content() {
  const onClose = React.useCallback(() => {
    if (window === window.parent) {
      return;
    }
    window.parent.postMessage('close', 'http://localhost:3000')
  },[])
  const onClick = React.useCallback(() => {
    if (window === window.parent) {
      return;
    }
    window.parent.postMessage('confirm', 'http://localhost:3000')
  },[])
  return (
    <div id="beach">
      <button onClick={onClose}>X</button>
      <h1>Welcome to Miami!</h1>
      <img src={beach} />
      <p>It is a nice place to go to.</p>
      <button onClick={onClick}>More Info</button>
    </div>
  );
}

export default Content;
