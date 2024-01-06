import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, SetisSignInForm] = useState(true);
  const toggleSignInForm = () => {
    SetisSignInForm(!isSignInForm);
  };
  return (
    <div className="relative">
      <Header />
      <div className="absolute bg-opacity-25 ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eab6047a-a101-4a14-8515-c67563fa2205/US-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        ></img>
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-20 mx-auto right-0 left-0 rounded-lg bg-opacity-75 ">
        <h1 className="font-bold text-3xl text-white py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 p-2 rounded-s-md w-full bg-gray-700"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="my-4 p-2 rounded-s-md w-full bg-gray-700"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-2 w-full bg-gray-700"
        ></input>
        <button className="p-2 my-4 bg-red-700 text-white w-100 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* <p className="text-white">Remember Me</p> */}
        <div className="text-white fon">
          <p onClick={toggleSignInForm}>
            {" "}
            {isSignInForm
              ? "New to Netflix?Sign Up Now"
              : "Already registered? Sign In Now..."}
          </p>
          {/* <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </p> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
