// import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import AuthRoutes from "./routes/AuthRoutes";

function App() {
  return (
    <div className="mainContainer">
      <Router>
        <AuthRoutes />
      </Router>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
