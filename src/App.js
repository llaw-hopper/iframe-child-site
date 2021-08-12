import "./App.css";
import qs from "qs";
import CallToAction from "./CallToAction";
import Content from "./Content";
import React from "react";

function App() {
  const parsed = qs.parse(window.location.search.replace(/^\?/, ""));
  if (parsed.content) {
    return <Content />;
  }
  return <CallToAction />;
}

export default App;
