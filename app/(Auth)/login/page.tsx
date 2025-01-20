"use client";
import { useLoading } from "@/contexts/LoadingContext";
import { Login } from "../Components";
import Loader from "@/app/components/Loading";

const Page = () => {
  const { loading } = useLoading();
  if (loading) {
    return <Loader />;
  }
  return <Login />;
};

export default Page;
