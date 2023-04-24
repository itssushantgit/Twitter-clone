import React from "react";
import "./PagenotFound.css";

const pagenotfound = () => {
  return (
    <div className="page_404">
      <div className="container">
        <div className="four_zero_four_bg">
          <h1 className="text-center">404!</h1>
        </div>
        <div className="img_404">
          <img
            src="https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif"
            height={550}
            width={800}
          />{" "}
        </div>

        <div className="content_text">
          <h2 className="text_head">look Like you're lost !!</h2>
          <br></br>
          <p>The page you are looking for not available !!</p>
        </div>
        <button className="Home_button">
          <a href="">Go to Home</a>
        </button>
      </div>
    </div>
  );
};

export default pagenotfound;
