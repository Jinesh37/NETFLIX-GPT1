import Header from "../components/Header";
import{PROFILELOGO} from "../utils/constant"
import { addUser } from "../utils/userSlice.jsx";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate.jsx";
import { auth } from "../utils/firebase.jsx";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import{BG_URL} from "../utils/constant";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    // validate the form data
    const message = isSignInForm
      ? checkValidData(email.current.value, password.current.value)
      : checkValidData(
          email.current.value,
          password.current.value,
          name.current.value
        );
    setErrorMsg(message);
    if (message) return;
    if (!isSignInForm) {
      //  Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(
          (userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILELOGO,
            // photoURL:PROFILELOGO
          })
            .then(() => {
              // here user didn't have updated information so we are using auth because it's have updated information
              const { uid, email, displayName } = auth;
              // const { uid, email, displayName,photoURL } = auth;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName})
                // addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL})
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem('user',user);
        })
        // .catch((error) => {
        //   // const errorCode = error.code;
        //   // const errorMessage = error.message;
        //   // setErrorMsg(error.code + "-" + error.message);
        // });
     
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover w-screen"
          src={BG_URL}
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black text-white  rounded-lg bg-opacity-70 absolute"
      >
        <h1 className="font-bold text-white text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full py-2 px-2 m-2 bg-gray-700 "
        />
        <p className="text-red-500 text-lg py-2">{errorMsg}</p>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="full Name"
            className="py-2 px-2 m-2 w-full bg-gray-700"
          />
        )}
        <p className="text-red-500 text-lg py-2">{errorMsg}</p>
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="w-full py-2 px-2 m-2 bg-gray-700 "
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMsg}</p>
        <button
          className="w-full py-4 m-2 bg-red-700 rounded-lg "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="my-2  cursor-pointer mx-2 font-semibold"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix?Sign Up Now"
            : "Already registered?Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
// rafce:react arrow Function Export Component
