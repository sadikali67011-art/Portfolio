import React from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { aboutMe, socialMedia } from "../constants";
import styles from "../style";

const Footer = () => (
  <section
    id="contactMe"
    className={`bg-primary ${styles.paddingX} ${styles.paddingY}`}
  >
    <div className={`${styles.boxWidth} mx-auto`}>
      <h2 className="font-poppins font-semibold text-white text-3xl sm:text-4xl">
        Let&apos;s Connect
      </h2>
      <p className="font-poppins text-dimWhite mt-4 max-w-2xl">
        Get in touch to discuss opportunities, projects, or collaboration.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        <a
          href="tel:+917534894896"
          className="flex items-center gap-4 rounded-xl bg-gray-800 p-5 text-dimWhite hover:text-teal-200"
        >
          <AiOutlinePhone className="h-6 w-6 text-teal-400" />
          <span>
            <strong className="block text-white">Phone</strong>
            +91 7534894896
          </span>
        </a>
        <a
          href="mailto:sadikali7011@gmail.com"
          className="flex items-center gap-4 rounded-xl bg-gray-800 p-5 text-dimWhite hover:text-teal-200"
        >
          <AiOutlineMail className="h-6 w-6 text-teal-400" />
          <span className="min-w-0">
            <strong className="block text-white">Email</strong>
            <span className="break-all">sadikali7011@gmail.com</span>
          </span>
        </a>
        <div className="flex items-center gap-4 rounded-xl bg-gray-800 p-5 text-dimWhite">
          <AiOutlineHome className="h-6 w-6 text-teal-400" />
          <span>
            <strong className="block text-white">Location</strong>
            {aboutMe.location}
          </span>
        </div>
      </div>

      <div className="flex flex-row justify-center mt-10">
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
      <p className="text-center font-poppins text-dimWhite text-sm mt-6">
        © {new Date().getFullYear()} {aboutMe.name}
      </p>
    </div>
  </section>
);

export default Footer;
