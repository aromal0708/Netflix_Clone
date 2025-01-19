"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import { useLoading } from "@/contexts/LoadingContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const { startLoading, stopLoading } = useLoading();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    startLoading();
    if (password !== confirmPassword) {
      toast.error("Passwords donot match");
      stopLoading();
      return;
    }

    if (!email || !name || !password) {
      toast.error("All Feilds Required");
      stopLoading();
      return;
    }
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setEmail("");
        setName("");
        setPassword("");
        setConfirmPassword("");
        router.push("/login");
      } else {
        stopLoading();
        throw new Error(data.message);
      }
    } catch (error: any) {
      console.log(error);
      stopLoading();
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full flex items-center justify-center h-screen bg-center bg-cover scrollbar scrollbar-none bg-login-pattern">
      <Navbar />
      <div className="w-[450px] h-[550px] flex rounded-lg bg-black bg-opacity-50 items-center  justify-center relative">
        <form
          onSubmit={handleSubmit}
          className="flex w-[450px] top-3 flex-col gap-2.5 p-[40px] items-center justify-center "
        >
          <span className="font-medium text-[34px] text-start mb-5 text-white text-opacity-80">
            Login
          </span>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter Full Name"
            className="auth-input"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Enter Email"
            className="auth-input"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
            className="auth-input"
          />
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            placeholder="Confirm Password"
            className="auth-input"
          />
          <button className="h-12 w-[300px] rounded-lg font-medium text-white text-xl bg-primary-red">
            Signup
          </button>
          <span className=" font-normal text-white text-opacity-50 ">
            Already Have an Account?{" "}
            <Link className="text-base text-white font-semibold" href="/login">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
