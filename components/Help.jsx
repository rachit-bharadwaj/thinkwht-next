import React from "react";

const Help = () => {
  return (
    <div
      class="absolute top-16 bg-white text-black z-50 max-h-[80vh] overflow-y-scroll p-10 mx-10 md:mx-24 lg:mx-56 rounded-lg border"
      id="helppopup"
    >
      <div class="flex lg:space-x-[85%] mb-[10px] popupnav space-x-[65%]">
        <h1 class="text-3xl font-extrabold">Help</h1>
        <h1
          id="helppopup"
          onClick={() => {
            document.getElementById("helppopup").style.display = "none";
            window.location.reload();
          }}
          className="absolute right-3 top-3 cursor-pointer text-3xl font-bold lg:font-extrabold"
        >
          X
        </h1>
      </div>
      <div class="line mb-[10px]"></div>
      <div class="help-content">
        <h1>What is Thinkwht?</h1>
        <p>
          This is a place where you can do anything from anywhere at any time.
          We believe each and every student is unique. Every Student deserves a
          chance to explore different domains of live learning. Via us
          practically learn and explore various domains of knowledge from
          Designing to coding, from Development to creative Designing, all under
          one shelter. The primary objective is to bring this to you on your
          doorstep and acknowledge the future of virtual learning. Out of
          everything, the most important thing is that the classes provided here
          are live interactive & practical sessions that will help learners
          lifelong.
        </p>
        <br></br>
        <h2>How to Login on Thinkwht? </h2>
        <p>
          It is very easy to join us at thinkwht. Log in to our platform (link
          of thinkwht) and try any of our interesting courses just by the click
          of a button to Apply now the session for the course. Also, we would
          like to inform you that our live sessions are completely easy to
          attend through our website.
        </p>
        <br></br>
        <h3>How to change password on Thinkwht?</h3>
        <p>
          There is a possibility that you would have forgotten/misplaced your
          password to log in. We have simple steps to help you create a new
          password and resume learning. The steps to do so are simple.{" "}
        </p>
        <br></br>
        <h4>How to book a course?</h4>
        <p>
          Go on to our website www.Thinkwh?t.com, Once you've found a course you
          want to take, register for it online by clicking on the "Apply now"
          button.
        </p>
        <br></br>
        <h5>How can a Student Signup on Thinkwht?</h5>
        <p>
          Navigate to the website's homepage. Look for a "Sign Up" or "Register"
          button on the website. This is usually located at the top of the page
          or in the website's header or footer. Click on the "Sign Up" or
          "Register" button. This should take you to a page where you can create
          a new account. Fill in the required information on the sign-up form.
          This typically includes your name, email address, and a password.
        </p>
      </div>
    </div>
  );
};

export default Help;
