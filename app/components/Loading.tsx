import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-screen bg-black w-full flex flex-col justify-center items-center gap-3">
      <img src="/Assets/logo.png" alt="logo" height={150} width={250} />
      <BarLoader color="red" />
    </div>
  );
};

export default Loader;
