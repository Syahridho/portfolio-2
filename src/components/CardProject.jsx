import { LazyLoadImage } from "react-lazy-load-image-component";

const CardProject = (props) => {
  return (
    <div className="border-2 rounded-2xl overflow-hidden shadow-md transtition duration-300 hover:shadow-2xl hover:cursor-pointer group">
      <LazyLoadImage
        src={props.img}
        width={600}
        height={400}
        className="transition duration-500 group-hover:scale-110"
      />
      <div className="flex-col p-4">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <p className="mt-2 mb-4 font-semibold text-sm">{props.desc}</p>
        <div className="flex">
          <img src={props.tools} alt="" className="w-7" />
        </div>
      </div>
    </div>
  );
};

export default CardProject;
