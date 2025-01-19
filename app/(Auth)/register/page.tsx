"use client";
import { Register } from "../Components";
import { useLoading } from "@/contexts/LoadingContext";
import Loader from "@/app/components/Loading";
import { useState } from "react";

const page = () => {
  const { loading } = useLoading();
  if (loading) {
    return <Loader />;
  }
  return <Register />;
};

export default page;
