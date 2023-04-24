import { Button } from "@mui/material";

import React from "react";
import { Twitter } from "@mui/icons-material";
import "./SigninPage.css";
import { GoogleLogin } from "@react-oauth/google";

const SigninPage = () => {
  return (
    <div className="signinpage">
      <div className="signin_top">
        {" "}
        <Twitter className="signin_twitter-icon" />
        <h2>Twitter</h2>
      </div>
      <div className="signin_header">Login Here</div>
      <div className="signin_body">
        <div className="signin_content">
          <input type="text" placeholder="Enter your Email"></input>{" "}
        </div>
        <br />
        <div className="signin_content">
          <input type="text" placeholder="Enter your Password"></input>{" "}
        </div>{" "}
        <br></br>
        <div className="sininbox_footer">
          <h5>
            Remember me <input type="checkbox"></input>
          </h5>
          <Button>Sign in</Button>

          <GoogleLogin
            className="GoogleLogin"
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <br></br>
      </div>
      <div className="signin_footer">
        <a href="#">Don't have an account ?</a>
        <a href="#">Forgot password</a>
      </div>
    </div>
  );
};

export default SigninPage;
