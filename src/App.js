// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./routes/Home/Home";
import ResumeTemplates from "./routes/ResumeTemplates/ResumeTemplates";
import ResumeBuilder from "./routes/ResumeBuilder/ResumeBuilder";
import CreateBuilder from "./routes/CreateBuilder/index";

function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/resume-templates" element={<ResumeTemplates />}></Route>
          <Route path="/make-resume" element={<ResumeBuilder />}></Route>
          <Route path="/create-builder" element={<CreateBuilder />}></Route>
        </Routes>
      </BrowserRouter>
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
