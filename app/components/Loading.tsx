import Image from "next/image";
import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-screen bg-black w-full flex flex-col justify-center items-center gap-4">
      <Image src="/Assets/logo.png" alt="logo" height={150} width={250} />
      <BarLoader width={230} color="red" />
    </div>
  );
};

export default Loader;
