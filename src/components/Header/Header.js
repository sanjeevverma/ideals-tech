import React from "react";
import "./Header.scss";

export const Header = ({}) => {
  return (
    <header>
      <div className="headerInfo">
        <div className="logoArea">idealsLogo</div>
        <div className="rightHeaderInfo">links</div>
      </div>
    </header>
  );
};

Header.propTypes = {};

Header.defaultProps = {};
