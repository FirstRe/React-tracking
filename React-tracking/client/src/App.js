import React from "react";
import { BrowserRouter as Router, Route ,Redirect } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Registration from "./pages/Registration";
import 'bootstrap/dist/css/bootstrap.min.css';
import Driver from "./pages/Driver";



function App() {
 

  // console.log = function() {};
  // console.warn = function() {};
//   window.console.log = window.console.debug = window.console.info = window.console.error = function () {
//     return true;
// }
// window.console.warn = window.console.debug = window.console.info = window.console.error = function () {
//   return true;
// }
  return (
    <Router>
      <Route path="/" exact render={(props) => <Registration />} />
      <Route path="/Main" exact render={(props) => <Main /> } />
      <Route path="/Driver" exact render={(props) => <Driver /> } />
      <Redirect to="/" />
    </Router>
  );
}

export default App;
