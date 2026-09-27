import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BANNER_URL, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = () => {
    //validate the form data
    const validateMessage = checkValidData(
      name.current?.value,
      email.current.value,
      password.current.value,
    );
    setErrorMessage(validateMessage);
    if (validateMessage) return;
    // Sign and Signup Logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up Logic
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              navigate("/browse");
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
      //sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="">
        <Header />
        <div className="brightness-50 fixed">
          <img
            src={BANNER_URL}
            alt="background"
            className="h-screen object-cover md:w-screen md:h-screen bg-black-900"
          />
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-center p-4 ">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-black lg:w-4/12 md:w-6/12 lg:mx-auto text-white rounded-2xl p-12 opacity-90"
          >
            <h1 className="text-2xl font-bold">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                type="text"
                ref={name}
                placeholder="Name"
                className="p-3 my-4 w-full rounded-lg bg-gray-700"
              />
            )}
            <input
              type="text"
              ref={email}
              placeholder="email"
              className="p-3 my-4 w-full rounded-lg bg-gray-700"
            />

            <input
              type="password"
              ref={password}
              placeholder="password"
              className="p-3 my-4 w-full rounded-lg bg-gray-700"
            />
            <p className="text-red-500 text-sm font-bold">{errorMessage}</p>
            <button
              className="p-2 my-4 w-full bg-red-600 rounded-lg"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="text-sm py-3 cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New in NetflixGPT SignUp?"
                : "Already Member Sign In Now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
