import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        width="150px"
        alt="logo"
      ></img>
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 p-4"
            src={user?.photoURL}
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
