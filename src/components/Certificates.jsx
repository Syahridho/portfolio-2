import { NavLink } from "react-router-dom";
import dFrondend from "./../img/sertifikat/dicoding/dicoding-frond-end.webp";
import dUx from "./../img/sertifikat/dicoding/dicoding-ux.webp";
import mMtcna from "./../img/sertifikat/mtcna/mtcna.webp";
import pGit from "./../img/sertifikat/progate/progate-git.webp";
import pHtmlCss from "./../img/sertifikat/progate/progate-html&css.webp";
import Footer from "./../components/Footer";

const ImgPro = (props) => {
  return (
    <div className={props.css}>
      <img src={props.img} alt="" />
    </div>
  );
};

const Certificates = () => {
  return (
    <div className="md:mt-20">
      <div className="text-center p-10">
        <h1 className="font-bold text-3xl">Certificate</h1>
        <p>My Certificate</p>
      </div>
      <div className="px-20 mb-10 grid gap-4 md:px-10 md:grid-cols-3">
        <ImgPro img={dFrondend} css="cursor-pointer md:h-full" />
        <ImgPro img={dUx} css="cursor-pointer" />
        <ImgPro
          img={mMtcna}
          css="cursor-pointer border  md:col-start-2 md:row-start-1 md:row-span-2"
        />
        <ImgPro img={pGit} css="cursor-pointer border" />
        <ImgPro
          img={pHtmlCss}
          css="cursor-pointer border md:col-start-3 md:row-start-2"
        />
      </div>
      <div className="text-center mt-8 mb-16">
        <NavLink to="/certificate/all">
          <button className="font-bold underline">See all</button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Certificates;
