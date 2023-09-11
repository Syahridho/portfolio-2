import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineAudit,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import { BsTelegram } from "react-icons/bs";

const Navigasi = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu((menu) => !menu);
  };

  let menuAction = menu ? "hamburger-active" : "";
  let link = menu ? "" : "hidden";
  let hLink = menu ? "h-screen" : "";

  return (
    <header
      className={`${hLink} z-50 bg-white w-full sticky top-0 md:h-screen md:pt-10 md:w-2/5 lg:w-1/5`}
    >
      <div className="p-4 flex flex-row justify-between border-b-2 md:pt-12 md:border-none md:justify-center">
        <div className="flex items-center gap-4  md:flex-col">
          <div className="bg-neutral-500 w-10 h-10 block rounded-full md:w-20 md:h-20"></div>
          <div>
            <h1 className="text-center font-bold">
              Syahridho Arjuna Syahputra
            </h1>
          </div>
        </div>
        <button
          onClick={handleClick}
          className={`${menuAction} rounded p-2 md:hidden`}
        >
          <span className="hamburger-line origin-top-right"></span>
          <span className="hamburger-line my-1.5 "></span>
          <span className="hamburger-line origin-right"></span>
        </button>
      </div>

      <div
        className={`px-4 h-4/5 ${link} flex flex-col justify-between bg-white md:h-auto md:block`}
      >
        <div>
          <hr className="my-4 hidden md:block" />
          <ul>
            <li>
              <NavLink
                to="/"
                className="w-full flex items-center gap-4 bg-white text-slate-800  rounded-md my-2 py-3 px-4 text-left hover:bg-neutral-200 md:hover:scale-105 transition duration-500"
                href=""
              >
                <div className="flex flex-row">
                  <AiOutlineHome className="inline my-auto" />
                  <div className="flex-grow ms-3 font-medium">Home</div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="w-full flex items-center gap-4 bg-white rounded-md my-2 py-3 px-4 text-left hover:bg-neutral-200 md:hover:scale-105 transition duration-500"
                href=""
              >
                <div className="flex flex-row">
                  <AiOutlineProject className="inline my-auto" />
                  <div className="flex-grow ms-3 font-medium">Project</div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/certificate"
                className="w-full flex items-center gap-4 bg-white rounded-md my-2 py-3 px-4 text-left hover:bg-neutral-200 md:hover:scale-105 transition duration-500"
                href=""
              >
                <div className="flex flex-row">
                  <AiOutlineAudit className="inline my-auto" />
                  <div className="flex-grow ms-3 font-medium">Certificate</div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="w-full flex items-center gap-4 bg-white rounded-md my-2 py-3 px-4 text-left hover:bg-neutral-200 md:hover:scale-105 transition duration-500"
                href=""
              >
                <div className="flex flex-row">
                  <AiOutlineUser className="inline my-auto" />
                  <div className="flex-grow ms-3 font-medium">Contact</div>
                </div>
              </NavLink>
            </li>
          </ul>
          <hr className="my-4" />
        </div>
        <div className="flex flex-col  mb-4">
          <h1 className="ms-4 mt-2 mb-4 font-medium text-center md:text-left">
            Lets Talk
          </h1>
          <ul className="flex flex-row gap-4 justify-center">
            <li>
              <a
                href="https://github.com/Syahridho"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hover:scale-110 transition duration-300">
                  <AiFillGithub className="w-6 h-6" />
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/syahridho__/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hover:scale-110 transition duration-300">
                  <AiFillInstagram className="w-6 h-6" />
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/syahridho"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hover:scale-110 transition duration-300">
                  <AiFillLinkedin className="w-6 h-6" />
                </button>
              </a>
            </li>
            <li>
              <a href="">
                <button className="hover:scale-110 transition duration-300">
                  <BsTelegram className="w-6 h-6" />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigasi;
