"use client";

import { useEffect } from "react";
import WelcomeText from "@/components/WelcomeText";
import profile from "../styles/images/profile.jpg";
import Image from "next/image";

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
              className="min-h-screen p-8 flex flex-col items-center justify-center text-center"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gray-200">
                Coming Soon
              </h1>
            </section>
            <section
              id="contact"
              className="min-h-screen p-8 flex flex-col items-center justify-center text-center"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gray-200">
                Coming Soon
              </h1>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
