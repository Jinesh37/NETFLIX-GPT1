import Header from "../components/Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate.jsx";
import {auth} from "../utils/firebase.jsx";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
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
    if (!isSignInForm) {
      //  Sign Up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode+"-"+errorMessage);
          // ..
        });
    } 
    else {
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential)=>{
          const user=userCredential.user;
          console.log(user);
      })
      .catch((error)=>{
        const errorCode=error.code;
        const errorMessage=error.message;
        setErrorMsg(error.code+"-"+error.message);
      })
      // Sign In logic
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black text-white  rounded-lg bg-opacity-70 absolute"
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
