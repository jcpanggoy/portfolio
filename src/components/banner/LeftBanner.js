import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiFlutter,
  SiMongodb,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Mobile App Developer", "Full-Stack Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Julia Coleene B. Panggoy
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#FFB6C1"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Skilled in designing efficient and user-friendly applications,
          proficient in multiple programming languages and frameworks. Proven
          track record of leadership, problem-solving, and collaboration through
          community engagement and technical support roles.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            CONNECT WITH ME
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/jcPanggoy/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/jcpanggoyyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/julia-coleene-panggoy-08b64b251"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/jcpanggoy"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            TOP SKILLS
          </h2>
          <div className="flex gap-4">
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaReact />
            </a>
            <a
              href="https://flutter.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <SiFlutter />
            </a>
            <a
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaNodeJs />
            </a>
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <SiMongodb />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
