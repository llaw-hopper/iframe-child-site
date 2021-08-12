import game from "./game.svg";
import "./App.css";
import React from "react";

function CallToAction() {
  const onClick = React.useCallback(() => {
    if (window.parent === window) {
      return;
    }
    window.parent.postMessage("open", "http://localhost:3000");
  }, []);

  return (
    <button className="cta" onClick={onClick}>
      <img src={game} />
      <span>Click me!</span>
    </button>
  );
}

export default CallToAction;
