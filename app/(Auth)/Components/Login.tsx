import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen bg-cneter bg-cover scrollbar scrollbar-none bg-login-pattern">
      <div className="w-[450px] h-[500px] flex rounded-lg bg-black bg-opacity-50 items-center  justify-center relative">
        <form
          action="submit"
          className="flex w-[450px] top-3 flex-col gap-2.5 p-[60px] justify-center  items-center"
        >
          <span className="font-medium mb-5 text-[34px] text-white text-opacity-80">
            Login
          </span>
          <input
            type="text"
            placeholder="Enter Email or Phone Number"
            className="auth-input"
          />
          <input
            type="text"
            placeholder="Enter Password"
            className="auth-input"
          />
          <button className="h-12 w-[300px] rounded-lg font-medium text-white text-xl bg-primary-red">
            Login
          </button>
          <span className=" font-normal text-white text-opacity-50 ">
            New to Netflix?{" "}
            <Link
              className="text-base text-white font-semibold"
              href="/register"
            >
              Sign Up Now
            </Link>
          </span>
          <span className="mt-5 text-white font-normal text-xs">
            Use the Email :"test@gmail.com" and Password:"test@12"
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
