import React from "react";
import "./ForgotPassword.scss";

export default function ForgotPassword() {
  return (
    <div>
      <div></div>
      <div>
        <div>Submit your forgotten password</div>
        <div>
          Enter your login email below. We will send you an email with a link to
          reset your password. Email us at support@resumegenius.com if you have
          difficulty accessing your account.
        </div>
        Email
        <input />
        <button>Submit</button>
        <div>Check your email!</div>
        An email has been sent sanjeevrajpoot07@gmail.com. Follow the
        instructions in that email to reset your password.
        <button>Back to login</button>
      </div>
    </div>
  );
}
