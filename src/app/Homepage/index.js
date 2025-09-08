"use client";

import { useEffect, useState } from "react";
import WelcomeText from "@/components/WelcomeText";
import profile from "../styles/images/profile.jpg";
import Image from "next/image";
import projectGif from "../styles/gif/yourinnovation2.gif";
import projectStatic from "../styles/images/firstyourinnovationgif.png";
import projectLogo from "../styles/images/yourinnovation.png";
import moneyhunterImg from "../styles/images/moneyhunter.png";
import confideeImg from "../styles/images/confidee.png";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

const ProjectCard = ({ title, gif, staticImage, logo, isPublic = false, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const CardContent = () => (
    <div
      className="relative w-80 h-52 lg:w-96 lg:h-60 m-4 overflow-hidden"
      onMouseEnter={() => !isPublic && setIsHovered(true)}
      onMouseLeave={() => !isPublic && setIsHovered(false)}
      style={{ cursor: isPublic ? 'pointer' : 'default' }}
    >
      <Image
        src={isPublic ? staticImage : (isHovered ? gif : staticImage)}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-opacity duration-300"
      />
      {!isPublic && (
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? "opacity-30" : "opacity-100"
            } bg-black bg-opacity-50 flex items-center justify-center`}
        >
          <Image
            src={logo}
            alt={title}
            width={150}
            height={150}
            className="mb-7"
          />
        </div>
      )}
      <h3 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-gray-200 p-2 text-center">
        {title}
      </h3>
    </div>
  );

  if (isPublic && url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

const Homepage = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    document.getElementsByTagName("head")[0].appendChild(meta);
  }, []);

  return (
    <>
      <div className="background-fixed"></div>
      <div className="content-wrapper">
        <div className="h-screen flex flex-col">
          <div className="flex-grow">
            <WelcomeText />
            <section
              id="about"
              className="min-h-screen p-8 flex flex-col items-center justify-center text-center"
            >
              <div className="w-32 h-32 mb-14">
                <Image
                  src={profile}
                  className="rounded-full w-full h-full object-cover"
                  style={{ objectPosition: "center -23px" }}
                  alt="Profile"
                />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gray-200">
                Hi, I'm Fakhri.
              </h1>
              <p className="mb-4 lg:mx-64 text-gray-400 font-montserrat">
                A full stack developer who loves exploring new technologies,
                pushing creative limits, and leveraging AI to craft mind-blowing
                web applications. Soaking up diverse perspectives and mentoring
                aspiring developers along the way. Let's create something
                incredible together – and maybe even swap a few tech tips while
                we're at it!
              </p>
            </section>
            <section
              id="portfolio"
              className="min-h-screen p-8 flex flex-col items-center justify-center"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-36 text-gray-200">
                Portfolio
              </h1>
              <div className="flex flex-wrap justify-center">
                <ProjectCard
                  title="Your Innovation"
                  gif={projectGif}
                  staticImage={projectStatic}
                  logo={projectLogo}
                  isPublic={false}
                />
                <ProjectCard
                  title="Money Hunter"
                  staticImage={moneyhunterImg}
                  url="https://moneyhunter.xyz"
                  isPublic={true}
                />
                <ProjectCard
                  title="Confidee"
                  staticImage={confideeImg}
                  url="https://confidee.xyz"
                  isPublic={true}
                />
              </div>
              <p className="mb-4 lg:mx-64 text-gray-400 font-montserrat text-center">
                Projects shown are real but anonymized for privacy and
                confidentiality reasons.
              </p>
            </section>
            <section
              id="contact"
              className="min-h-screen p-8 flex flex-col items-center justify-center text-center"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gray-200">
                Contact
              </h1>
              <p className="mb-8 text-xl text-gray-400 font-montserrat">
                Let's connect and create something amazing!
              </p>
              <div className="flex space-x-8">
                <a
                  href="https://linkedin.com/in/fdaniall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-200 hover:text-gray-400 text-lg font-montserrat transition-colors duration-300"
                >
                  <FaLinkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/fdaniall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-200 hover:text-gray-400 text-lg font-montserrat transition-colors duration-300"
                >
                  <FaGithub size={24} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://instagram.com/fdaniall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-200 hover:text-gray-400 text-lg font-montserrat transition-colors duration-300"
                >
                  <FaInstagram size={24} />
                  <span>Instagram</span>
                </a>
              </div>
            </section>
          </div >
        </div >
      </div >
    </>
  );
};

export default Homepage;