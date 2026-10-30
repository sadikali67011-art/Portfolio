import React from "react";
import styles, { layout } from "../style";
import { educationList } from "../constants";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const FeatureCard = ({
  icon,
  title,
  degree,
  duration,
  content1,
  content2,
  index,
}) => (
  <div
    className={`flex flex-row p-6 rounded-[20px]
	${index === educationList.length - 1 ? "mb-0" : "mb-6"} feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <span className="text-3xl text-teal-200">
        {React.createElement(icon)}
      </span>
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h4 className="font-poppins font-semibold text-white text-[20px] leading-[30px] mb-1 text-gradient">
        {title}
      </h4>
      <p className="font-poppins font-normal text-white text-[16px] leading-[30px] mb-1 ">
        {degree}
      </p>
      <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[30px] mb-1">
        {duration}
      </p>
      {content1 && (
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[30px] mb-1">
          ● {content1}
        </p>
      )}
      {content2 && (
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[30px] mb-1">     
      ● {content2}
        </p>
      )}
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Education
      </h1>
      <motion.div
        className={layout.sectionReverse}
        whileInView={{ x: [-60, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className={layout.sectionImgReverse}>
          <div className="relative z-[5] flex h-64 w-64 flex-col items-center justify-center rounded-full bg-dimBlue">
            <FaGraduationCap className="text-8xl text-teal-200" />
            <p className="mt-4 font-poppins text-lg text-white">
              Learning by building
            </p>
          </div>

          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>

        <div className={`${layout.sectionInfo} flex-col`}>
          {educationList.map((feature, index) => (
            <FeatureCard key={feature.id} index={index} {...feature} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
