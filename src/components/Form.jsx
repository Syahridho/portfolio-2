import Footer from "./Footer";

const Form = () => {
  return (
    <div className="md:pt-20">
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">Contact</h1>
      </div>
      <form className="px-10 mb-36 md:px-28 lg:36">
        <label className="font-semibold">
          Name
          <br />
          <input
            placeholder="name"
            type="text"
            name="name"
            className="w-full border py-1 px-3 mb-6 mt-2 rounded"
          />
        </label>
        <label className="font-semibold">
          Email
          <br />
          <input
            placeholder="name@email.com"
            type="email"
            name="name"
            className="w-full border py-1 px-3 mb-6  mt-2 rounded"
          />
        </label>
        <label className="font-semibold">
          Text
          <br />
          <textarea
            placeholder="You massage"
            className="w-full border py-2 px-3 mb-6  mt-2 rounded"
          ></textarea>
        </label>
        <input
          type="submit"
          value="Submit"
          className="bg-slate-800 px-4 py-2 rounded text-white cursor-pointer"
        />
      </form>
      <Footer />
    </div>
  );
};

export default Form;
