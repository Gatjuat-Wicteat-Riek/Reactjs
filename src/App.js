import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarNavigate from "./NavbarNavigate";
const App = () => {
  return (
    <div className="App">
      <NavbarNavigate />
      <Button>Click Me</Button>
    </div>
  );
};

export default App;
