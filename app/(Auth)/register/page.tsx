"use client";
import { Register } from "../Components";
import { useLoading } from "@/contexts/LoadingContext";
import Loader from "@/app/components/Loading";

const Page = () => {
  const { loading } = useLoading();
  if (loading) {
    return <Loader />;
  }
  return <Register />;
};

export default Page;
