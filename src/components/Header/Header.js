import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  const navigate = useNavigate();
  const logoClick = () => {
    navigate("/");
  };
  const clickBuildResume = () => {
    navigate("/resume-templates");
  };
  const clickLogin = () => {
    navigate("/account/login");
  };
  return (
    <header>
      <div className="headerInfo">
        <div className="logoArea" onClick={logoClick}>
          idealsLogo
        </div>
        <div className="rightHeaderInfo">
          <nav className="nav-primary">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/" alt="">
                  Resume
                </a>
              </li>
              {/* <li className="nav-item">
                <a>Cover Letter</a>
              </li> */}
              {/* <li className="nav-item">
                <a href="/" alt="">
                  Blog
                </a>
              </li> */}
              <li className="nav-item">
                <a href="/pricing" alt="">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
          <div className="navBtnInfo">
            <button className="btn-primary" onClick={clickBuildResume}>
              Build My resume
            </button>
            <button onClick={clickLogin}>Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

Header.defaultProps = {};
