import Navigasi from "../components/Navigasi";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div className="mx-auto h-screen bg-white">
      <div className="flex flex-col justify-center md:flex-row md:gap-5">
        <Navigasi />
        <div className=" w-full bg-white  lg:max-w-[854px]">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
