"use client";
import { signIn, SignInResponse } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import { useLoading } from "@/contexts/LoadingContext";

const Login = () => {
  const { startLoading, stopLoading } = useLoading();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    startLoading();
    try {
      if (!email || !password) {
        toast.error("All Feilds Required");
        stopLoading();
        return;
      }
      const res: SignInResponse | undefined = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.ok) {
        toast.success("Log In Successful");
      } else {
        toast.error(res?.error || "An unknown Error Occurred  F");
        stopLoading();
        return;
      }
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An inexpected error occurred");
      }
      stopLoading();
    }
  };

  useEffect(() => {
    stopLoading();
  },[]);
  return (
    <div className="w-full flex items-center justify-center h-screen bg-cneter bg-cover scrollbar scrollbar-none bg-login-pattern">
      <Navbar />
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
            Use the Email : <b>test@gmail.com</b> and Password:<b>test@12</b>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
