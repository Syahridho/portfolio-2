import { useState } from "react";
import { BsBuildings } from "react-icons/bs";
import { AiOutlineCode } from "react-icons/ai";
import html from "./../img/icons/icons8-html.svg";
import css from "./../img/icons/icons8-css.svg";
import js from "./../img/icons/icons8-javascript.svg";
import react from "./../img/icons/icons8-react-native.svg";
import tailwind from "./../img/icons/icons8-tailwind-css.svg";
import figma from "./../img/icons/icons8-figma.svg";
import vscode from "./../img/icons/icons8-visual-studio-code.svg";
import git from "./../img/icons/icons8-git.svg";
import Logo from "./../img/logo.png";

const Desc = () => {
  const [develop, setDevelop] = useState(true);
  const [design, setDesign] = useState(false);

  const handleClickCo = () => {
    if (develop === false) {
      setDevelop(true);
      setDesign(false);
    }
  };

  const handleClickUi = () => {
    if (design === false) {
      setDevelop(false);
      setDesign(true);
    }
  };

  let coding = develop ? "flex" : "hidden";
  let ui = design ? "flex" : "hidden";

  let activeCoding = develop ? "bg-slate-800 text-white" : "";
  let activeDesign = design ? "bg-slate-800 text-white" : "";

  return (
    <div className="text-neutral-800 md:mt-20">
      <div className="p-10">
        <h1 className="text-3xl font-bold text-black">Hi, I`am Syahridho👋</h1>
        <ol className="flex flex-col list-disc ml-6 my-6 font-medium md:flex-row md:gap-8">
          <li>Web Development</li>
          <li>Based in Pekanbaru, Indonesia</li>
        </ol>
        <p className="leading-7 text-lg font-medium mt-4 border-b-2 pb-8">
          A Web Development with a focus on Front-End Developer. I am committed
          to creating creative and functional solutions in every project. With a
          background in Informatics Engineering, I combine engaging design with
          technical ability to deliver stunning results.
        </p>
      </div>
      <div className="px-10 ">
        <div className="pb-10 border-b-2">
          <div className="flex gap-3">
            <BsBuildings className="w-6 h-6" />
            <h1 className="text-xl font-bold">Career</h1>
          </div>
          <h1 className="my-4 font-medium">My Career</h1>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex w-full md:w-1/2">
              <div className="w-full py-4 px-6 border rounded-md shadow flex flex-row items-center gap-4 transition duration-500 hover:shadow-md ">
                <img src={Logo} alt="" className="w-16 h-16" />
                <div className="space-y-0.5">
                  <h1 className="font-bold text-lg">
                    Universitas Lancang Kuning
                  </h1>
                  <div className="text-sm font-semibold ">
                    <p>informatics engineering</p>
                    <p>Mei 2022 - Present</p>
                    <p>~ 3rd semester</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="flex items-center gap-3">
          <AiOutlineCode className="w-6 h-6" />
          <h1 className="font-bold text-xl">Skill</h1>
        </div>
        <p className="font-medium my-4">Tools I use for design and coding</p>
        <div className="flex justify-center py-6 md:py-10">
          <button
            onClick={handleClickCo}
            className={`${activeCoding} py-1 px-10 border-2 border-slate-800 shadow-md rounded-l-lg hover:shadow-lg`}
          >
            Coding
          </button>
          <button
            onClick={handleClickUi}
            className={`${activeDesign} py-1 px-10 border-2 border-slate-800 shadow-md rounded-r-lg hover:shadow-lg`}
          >
            Design
          </button>
        </div>
        <div
          className={`${coding} flex-row justify-center gap-2 my-6 md:gap-4`}
        >
          <div className="flex flex-col items-center">
            <img
              src={html}
              alt=""
              className="transition duration-500 hover:drop-shadow-[0_0px_20px_rgba(230,81,0,1)]"
            />
            <p className="text-xs font-bold ">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={css}
              alt=""
              className="transition duration-500 hover:drop-shadow-[0_0px_20px_rgba(2,119,189,1)]"
            />
            <p className="text-xs font-bold ">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={js}
              alt=""
              className="transition duration-500 hover:drop-shadow-[0_0px_20px_rgba(247,223,30,1)]"
            />
            <p className="text-xs font-bold ">JS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={react}
              alt=""
              className="transition duration-500 hover:drop-shadow-[0_0px_20px_rgba(128,222,234,1)]"
            />
            <p className="text-xs font-bold ">REACT</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={tailwind}
              alt=""
              className="transition duration-500 hover:drop-shadow-[0_0px_20px_rgba(0,172,193,1)]"
            />
            <p className="text-xs font-bold ">TAILWIND</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={vscode}
              alt=""
              className="transition duration-500 hover:drop-shadow-[0_0px_20px_rgba(1,119,190,1)]"
            />
            <p className="text-xs font-bold ">VSCODE</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={git}
              alt=""
              className="transition duration-500 hover:drop-shadow-[0_0px_20px_rgba(230,81,0,1)]"
            />
            <p className="text-xs font-bold ">GIT</p>
          </div>
        </div>
        <div className={`${ui} flex-row justify-center gap-2 my-6 md:gap-4`}>
          <div className="flex flex-col items-center">
            <img
              src={figma}
              alt=""
              className="transition duration-500 hover:drop-shadow-[0_0px_20px_rgba(124,77,255,1)]"
            />
            <p className="text-xs font-bold ">FIGMA</p>
          </div>
        </div>
      </div>
      <div className="px-10">
        <div className="py-16 flex justify-center border-t-2">
          <button className="px-8 py-2 border-slate-800 rounded-md bg-slate-800 text-white shadow-[0_10px_0_rgba(0,0,0,0.3)] trasnsition duration-500 hover:bg-slate-900 active:translate-y-4 active:shadow-none">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desc;
