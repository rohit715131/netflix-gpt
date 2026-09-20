import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4a59f124-030b-417a-9565-8362f395bdb0/web/IN-en-20260914-TRIFECTA-perspective_16ddf2ab-4945-4e79-8f84-6df3eef26875_large.jpg"
          alt="background"
          className=" bg-black-900"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center p-4 ">
          <form className="bg-black lg:w-4/12 md:w-6/12 lg:mx-auto text-white rounded-2xl p-12 opacity-90">
            <h1 className="text-2xl font-bold">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Name"
                className="p-3 my-4 w-full rounded-lg bg-gray-700"
              />
            )}
            <input
              type="text"
              placeholder="email"
              className="p-3 my-4 w-full rounded-lg bg-gray-700"
            />

            <input
              type="password"
              placeholder="password"
              className="p-3 my-4 w-full rounded-lg bg-gray-700"
            />
            <button className="p-2 my-4 w-full bg-red-600 rounded-lg">
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
