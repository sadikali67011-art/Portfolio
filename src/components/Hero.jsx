import styles from "../style";
import { aboutMe, socialMedia } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";
import React from "react";
import profilePhoto from "../../image.jpeg";

const Hero = () => (
  <>
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`}
    >
      <div className="flex-1 flex flex-col justify-center">
        <p className="font-poppins text-teal-200 text-lg">Hello, I&apos;m</p>
        <h1 className="font-poppins font-semibold text-white text-[52px] ss:text-[72px] leading-tight">
          <span className="text-gradient">{aboutMe.name}</span>
        </h1>
        <h2 className="font-poppins text-white text-2xl ss:text-3xl mt-2">
          {aboutMe.tagLine}
        </h2>
        <p className={`${styles.paragraph} max-w-[720px] mt-5`}>
          {aboutMe.intro}
        </p>
        <p className="font-poppins text-dimWhite mt-4">{aboutMe.location}</p>

        <div className="flex flex-row items-center mt-6">
          {socialMedia.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              key={social.id}
              className="text-white mr-5 text-[25px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollToSection("contactMe")}
          className="mt-8 w-fit rounded bg-blue-gradient px-5 py-3 font-poppins font-medium text-primary"
        >
          Contact Me
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <div className="w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] overflow-hidden rounded-[32px] border-4 border-teal-400 shadow-[0_0_60px_rgba(0,255,255,0.18)]">
          <img
            src={profilePhoto}
            alt="Sadik Ali"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>

    <section
      id="about"
      className={`flex flex-col ${styles.paddingY} ${styles.paddingX}`}
    >
      <h2 className="font-poppins font-semibold text-white text-3xl sm:text-4xl">
        Career Objective
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[1000px]`}>
        {aboutMe.careerObjective}
      </p>
    </section>
  </>
);

export default Hero;
