import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen bg-cneter bg-cover scrollbar scrollbar-none bg-login-pattern">
      <div className="w-[450px] h-[550px] flex rounded-lg bg-black bg-opacity-50 items-center  justify-center relative">
        <form
          action="submit"
          className="flex w-[450px] top-3 flex-col gap-2.5 p-[40px] items-center justify-center "
        >
          <span className="font-medium text-[34px] text-start mb-5 text-white text-opacity-80">
            Login
          </span>
          <input
            type="text"
            placeholder="First Name"
            className="auth-input"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="auth-input"
          />
          <input
            type="text"
            placeholder="Enter Email"
            className="auth-input"
          />
          <input
            type="text"
            placeholder="Enter Password"
            className="auth-input"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="auth-input"
          />
          <button className="h-12 w-[300px] rounded-lg font-medium text-white text-xl bg-primary-red">
            Login
          </button>
          <span className=" font-normal text-white text-opacity-50 ">
            Already Have an Account?{" "}
            <Link
              className="text-base text-white font-semibold"
              href="/register"
            >
            Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Register