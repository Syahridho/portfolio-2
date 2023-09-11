import Gallerys from "../components/Gallerys";
import Navigasi from "../components/Navigasi";

const Gallery = () => {
  return (
    <div className="mx-auto h-screen bg-white">
      <div className="flex flex-col justify-center md:flex-row md:gap-5">
        <Navigasi />
        <div className=" w-full bg-white h-full lg:max-w-[854px]">
          <Gallerys />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
