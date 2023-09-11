import Desc from "../components/Desc";
import Navigasi from "../components/Navigasi";

const Home = () => {
  return (
    <div className="mx-auto h-screen bg-white ">
      <div className="flex flex-col justify-center md:flex-row md:gap-5">
        <Navigasi />
        <div className=" w-full bg-white h-full lg:max-w-[854px]">
          <Desc />
        </div>
      </div>
    </div>
  );
};

export default Home;
