"use client";
import { useLoading } from "@/contexts/LoadingContext";
import { Login } from "../Components";
import Loader from "@/app/components/Loading";

const page = () => {
  const { loading } = useLoading();
  if (loading) {
    return <Loader />;
  }
  return <Login />;
};

export default page;
