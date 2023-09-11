import aHtml from "./../img/sertifikat/always/always-html.webp";
import aCss from "./../img/sertifikat/always/always-css.webp";
import aJs from "./../img/sertifikat/always/always-js.webp";
import aMysql from "./../img/sertifikat/always/always-mysql.webp";
import aPhp from "./../img/sertifikat/always/always-php.webp";

import dAws from "./../img/sertifikat/dicoding/dicoding-aws.webp";
import dBackend from "./../img/sertifikat/dicoding/dicoding-backend.webp";
import dDevops from "./../img/sertifikat/dicoding/dicoding-devops.webp";
import dFrondend from "./../img/sertifikat/dicoding/dicoding-frond-end.webp";
import dJaringan from "./../img/sertifikat/dicoding/dicoding-jaringan.webp";
import dJs from "./../img/sertifikat/dicoding/dicoding-js.webp";
import dMysql from "./../img/sertifikat/dicoding/dicoding-mysql.webp";
import dProyek from "./../img/sertifikat/dicoding/dicoding-proyek.webp";
import dPsoftware from "./../img/sertifikat/dicoding/dicoding-Psoftware.webp";
import dPweb from "./../img/sertifikat/dicoding/dicoding-Pweb.webp";
import dUx from "./../img/sertifikat/dicoding/dicoding-ux.webp";
// import dSolid from "./../img/sertifikat/dicoding/dicoding-solid.webp";

import mMtcna from "./../img/sertifikat/mtcna/mtcna.webp";

import pGit from "./../img/sertifikat/progate/progate-git.webp";
import pHtmlCss from "./../img/sertifikat/progate/progate-html&css.webp";
import pJs from "./../img/sertifikat/progate/progate-js.webp";
import pMysql from "./../img/sertifikat/progate/progate-mysql.webp";
import pSass from "./../img/sertifikat/progate/progate-sass.webp";

import { BsArrowLeftCircle } from "react-icons/bs";

import Footer from "./../components/Footer";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const UiUx = () => {
  return (
    <div className="px-20 mb-10  grid gap-4 md:px-10 md:grid-cols-3 md:mb-44">
      <div className="cursor-pointer">
        <img src={dUx} alt="" />
      </div>
      <div className="cursor-pointer">
        <img src={dProyek} alt="" />
      </div>
      <div className="cursor-pointer ">
        <img src={dPweb} alt="" />
      </div>
    </div>
  );
};

const FrondEnd = () => {
  return (
    <div className="px-20 mb-10 grid gap-4 md:px-10 md:grid-cols-3">
      <div className="cursor-pointer">
        <img src={dFrondend} alt="" />
      </div>
      <div className="cursor-pointer">
        <img src={dJs} alt="" />
      </div>
      <div className="cursor-pointer ">
        <img src={dPweb} alt="" />
      </div>
      <div className="cursor-pointer">
        <img src={dPsoftware} alt="" />
      </div>
      <div className="cursor-pointer border">
        <img src={pHtmlCss} alt="" />
      </div>
      <div className="cursor-pointer border">
        <img src={pJs} alt="" />
      </div>
      <div className="cursor-pointer border">
        <img src={pSass} alt="" />
      </div>
      <div className="cursor-pointer border">
        <img src={pGit} alt="" />
      </div>
      <div className="cursor-pointer ">
        <img src={aHtml} alt="" />
      </div>
      <div className="cursor-pointer ">
        <img src={aCss} alt="" />
      </div>
      <div className="cursor-pointer ">
        <img src={aJs} alt="" />
      </div>
    </div>
  );
};

const BackEnd = () => {
  return (
    <div className="px-20 mb-10 grid gap-4 md:px-10 md:grid-cols-3">
      <div className="cursor-pointer">
        <img src={dBackend} alt="" />
      </div>
      <div className="cursor-pointer ">
        <img src={dAws} alt="" />
      </div>
      <div className="cursor-pointer ">
        <img src={dJs} alt="" />
      </div>
      <div className="cursor-pointer ">
        <img src={dMysql} alt="" />
      </div>
      <div className="cursor-pointer border">
        <img src={pMysql} alt="" />
      </div>
      <div className="cursor-pointer border">
        <img src={pGit} alt="" />
      </div>
      <div className="cursor-pointer ">
        <img src={aJs} alt="" />
      </div>
      <div className="cursor-pointer ">
        <img src={aPhp} alt="" />
      </div>
      <div className="cursor-pointer ">
        <img src={aMysql} alt="" />
      </div>
    </div>
  );
};

const DevOps = () => {
  return (
    <div className="px-20 mb-10 grid gap-4 md:px-10 md:grid-cols-3">
      <div className="cursor-pointer">
        <img src={dDevops} alt="" />
      </div>
      <div className="cursor-pointer">
        <img src={dJaringan} alt="" />
      </div>
      <div className="cursor-pointer ">
        <img src={dAws} alt="" />
      </div>
      <div className="cursor-pointer border">
        <img src={mMtcna} alt="" />
      </div>
    </div>
  );
};

const Gallerys = () => {
  const data = [
    {
      id: 1,
      title: "UIUX",
      img: <UiUx />,
    },
    {
      id: 2,
      title: "FrondEnd",
      img: <FrondEnd />,
    },
    {
      id: 3,
      title: "BackEnd",
      img: <BackEnd />,
    },
    {
      id: 4,
      title: "DevOps",
      img: <DevOps />,
    },
  ];

  const [toggle, setToggle] = useState(1);

  console.log(data.active);

  return (
    <div className="md:mt-20">
      <div className="p-10 relative">
        <NavLink to={"/Certificate"}>
          <BsArrowLeftCircle className="w-6 h-6 inline-block absolute top-11" />
        </NavLink>
        <h1 className="font-bold text-center text-3xl col-start-3 col-end-3">
          All Certificate
        </h1>
      </div>
      <div className="flex justify-center gap-2 my-10">
        {data.map(({ id, title }) => {
          return (
            <button
              key={id}
              className="btn-allCer"
              onClick={() => setToggle(id)}
            >
              {title}
            </button>
          );
        })}
      </div>
      {data.map(({ id, img }) => {
        return <>{toggle === id ? <div>{img}</div> : null}</>;
      })}
      <Footer />
    </div>
  );
};

export default Gallerys;
