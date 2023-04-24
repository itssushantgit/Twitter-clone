import React from "react";
import "./Loginpage.css";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import TwitterIcon from "@mui/icons-material/Twitter";
// import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="HomePage">
      <div className="Home_head">
        <span className="Home_headleft">
          <a href="/">
            <TwitterIcon className="login_twitterIcon" />
          </a>
        </span>
        <h2 className="happening"> Happening Now</h2>

        <div className="widgets_Container">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="RONBupdates"
            options={{ height: 700, width: 700 }}
          />
        </div>

        <h2 className="sub-head">Join Twitter Today</h2>
      </div>
      <div className="bodyPage">
        <button className="sign-upbtn">
          Sign up with Google <FcGoogle className="login_GoogleIcon" />
        </button>

        <button className="sign-upbtn">
          {" "}
          Sign up with Apple <AppleIcon className="login_AppleIcon" />
        </button>
        <Link to="/SingupPage">
          <button className="sign-upbtn"> Create account</button>
        </Link>
        <h3>Already have an account ?</h3>
        <Link to="/SigninPage">
          <button className="sign-inbtn"> Sign in</button>
        </Link>
        <p className="policies-text">
          By signing up, you agree to the <a href="#"> Terms of Service</a> and
          <a href="#"> Privacy Policy</a> including
          <a href="#"> Cookie Use </a>
        </p>
      </div>
      <div className="footer">
        <ul className="footer-items">
          <li className="footer-list">
            <a href="#">Help Center</a>
          </li>
          <li className="footer-list">
            <a href="#">Businessr</a>
          </li>
          <li className="footer-list">
            <a href="#">Policy</a>
          </li>
          <li className="footer-list">
            <a href="#">Cookiesr</a>
          </li>
          <li className="footer-list">
            <a href="#">Developers</a>
          </li>
          <li className="footer-list">
            <a href="#">Help Center</a>
          </li>
          <li className="footer-list">
            <a href="#">Center</a>
          </li>
          <li className="footer-list">
            <a href="#"> Terms of Service</a>
          </li>
          <li className="footer-list">
            <a href="#"> Developers</a>
          </li>
          <li className="footer-list">
            <a href="#">Twitter for Business</a>
          </li>
          <li className="footer-list">
            <a href="#"> Status</a>
          </li>
          <li className="footer-list">
            <a href="#">About</a>
          </li>
          <li className="footer-list">
            <a href="#"> Ads Info</a>
          </li>
          <li className="footer-list">
            <a href="#"> Accessibility</a>
          </li>
          <li className="footer-list">
            <a href="#"> Cookie Policy</a>
          </li>
          <li className="footer-list">
            <a href="#"> Privacy Policy</a>
          </li>
          <li className="footer-list">
            <a href="#"> Marketing</a>
          </li>
          <li className="footer-list">
            <a href="#">Blog</a>
          </li>
          <li className="footer-list">
            <a href="#">Careers</a>
          </li>
          <li className="footer-list">
            <a href="#"> Brand Resource</a>
          </li>
          <li className="footer-list">
            <a href="#"> Directory</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
