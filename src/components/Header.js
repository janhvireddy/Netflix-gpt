import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  //setup this eventlisterner for once
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //this is called unsubscribe when component unmount
    return () => unSubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img src={LOGO} width="150px" alt="logo"></img>
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 p-4"
            src={user?.photo_URL}
            alt="user-icon"
          ></img>
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white font-bold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
