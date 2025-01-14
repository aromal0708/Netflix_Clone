"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        toast.error("All Feilds Required");
        return;
      }
      const res: any = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.ok) {
        toast.success("Log In Successful");
      } else {
        toast.error(res.error);
        return;
      }
      router.push("/");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <div className="w-full flex items-center justify-center h-screen bg-cneter bg-cover scrollbar scrollbar-none bg-login-pattern">
      <div className="w-[450px] h-[500px] flex rounded-lg bg-black bg-opacity-50 items-center  justify-center relative">
        <form
          onSubmit={handleSubmit}
          className="flex w-[450px] top-3 flex-col gap-2.5 p-[60px] justify-center  items-center"
        >
          <span className="font-medium mb-5 text-[34px] text-white text-opacity-80">
            Login
          </span>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Email or Phone Number"
            className="auth-input"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
