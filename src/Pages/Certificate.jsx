import Certificates from "../components/Certificates";
import Navigasi from "../components/Navigasi";

const Certificate = () => {
  return (
    <div className="mx-auto h-screen bg-white">
      <div className="flex flex-col justify-center md:flex-row md:gap-5">
        <Navigasi />
        <div className=" w-full bg-white h-full lg:max-w-[854px]">
          <Certificates />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
