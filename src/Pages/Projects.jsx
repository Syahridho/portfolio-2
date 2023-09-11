import CardProject from "../components/CardProject";
import Navigasi from "../components/Navigasi";

import uiShoes from "./../img/project/uiShoes.webp";
import uiMusic from "./../img/project/uiMusic.webp";
import figma from "./../img/icons/icons8-figma.svg";
// import html from "./../img/icons/icons8-html.svg";
// import css from "./../img/icons/icons8-css.svg";
// import js from "./../img/icons/icons8-javascript.svg";
// import react from "./../img/icons/icons8-react-native.svg";
// import tailwind from "./../img/icons/icons8-tailwind-css.svg";
// import vscode from "./../img/icons/icons8-visual-studio-code.svg";
// import git from "./../img/icons/icons8-git.svg";

const Projects = () => {
  return (
    <div className="mx-auto h-screen bg-white">
      <div className="flex flex-col justify-center md:flex-row md:gap-5">
        <Navigasi />
        <div className=" w-full bg-white h-full lg:max-w-[854px]">
          <div className="md:pt-20">
            <div className="p-10 text-center">
              <h1 className="font-bold text-3xl">Projects</h1>
              <p className="">My Projects</p>
            </div>
            <div className="px-10 mb-10 grid gap-4 md:grid-cols-2">
              <CardProject
                img={uiShoes}
                title="UI homepack shoes store"
                desc="Simple design for shoe store home page."
                tools={figma}
              />
              <CardProject
                img={uiMusic}
                title="UI homepack Music"
                desc="Simple design for music app."
                tools={figma}
              />
              <CardProject
                img={uiMusic}
                title="UI homepack Music"
                desc="Simple design for music app."
                tools={figma}
              />
              <CardProject
                img={uiMusic}
                title="UI homepack Music"
                desc="Simple design for music app."
                tools={figma}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
