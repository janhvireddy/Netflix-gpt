import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { photo_URL } from "../utils/constants";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignInForm, SetisSignInForm] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    SetisSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    //sign in /sign up
    if (!isSignInForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: { photo_URL },
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photo_URL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute bg-opacity-25 ">
        <img src={BG_URL} alt="bg-img"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-20 mx-auto right-0 left-0 rounded-lg bg-opacity-75 "
      >
        <h1 className="font-bold text-3xl text-white py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-4 p-2 rounded-s-md w-full bg-gray-700 text-white"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="my-4 p-2 rounded-s-md w-full bg-gray-700 text-white"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-2 w-full bg-gray-700 text-white"
        ></input>
        <p className="text-white">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-red-700 text-white w-100 w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* <p className="text-white">Remember Me</p> */}
        <div className="text-white fon">
          <p onClick={toggleSignInForm}>
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
