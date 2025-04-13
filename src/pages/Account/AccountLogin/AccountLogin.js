import React from "react";
import "./AccountLogin.scss";

function AccountLogin() {
  return (
    <div className="loginSection">
      <div className="loginData">
        <div className="loginTopSection">
          <div className="loginTitle">Welcome, Back</div>
          <div className="loginSubText">
            You're just a step away from your account!
          </div>
          <button>Sign up with google</button>
        </div>
        <div className="loginOrInfo">OR</div>
        <div className="loginFormSection">
          <div className="loginFromRow">
            <label>email</label>
            <input className="formInput" type="text" />
          </div>
          <div className="loginFromRow">
            <label>password</label>
            <input className="formInput" type="password" />
          </div>

          <div className="rememberInfo">
            <div>
              <input className="rememberCheckBox" type="checkbox" />
              Remember me
            </div>
            <div>
              <a href="/account/forgot-password">Forgot Password?</a>
            </div>
          </div>
          <div className="loginButtonInfo">
            <button>Login</button>
          </div>
          <div className="signupAccountInfo">
            Don't you have an account? <a href="/account/register" alt="Sign up">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountLogin;
