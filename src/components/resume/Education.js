import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* change to Diploma pic */}
          <ResumeCard
            title="Bachelor of Science in Computer Science"
            subTitle="Mapúa Malayan Colleges Mindanao (2021 - Expected 2024)"
            result="DVO PH"
            des="Consistently achieved President’s List status with a General Weighted Average (GWA) ranging from 1.25 to 1.05."
            link="https://mcm.edu.ph/about/world-class-mapua-education/"
          />
          {/* change to Diploma pic */}
          <ResumeCard
            title="Science, Technology, Engineering, and Mathematics (STEM)"
            subTitle="San Pedro College (2019 - 2021)"
            result="DVO PH"
            des2="Consistently achieved With High Honor status with a General Weighted Average (GWA) ranging from 95 to 97."
            des="Ranked 5 among 76 Grade 12 Students of Class 2020 - 2021"
            link="https://www.spcdavao.edu.ph/home/academics/"
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Customer Care Support"
            subTitle="Alorica (Dec 2023 - Mar 2024)"
            result="PH"
            des="Provided customer support for Google's technical account at Alorica Davao, ensuring high customer satisfaction."
            link="https://drive.google.com/file/d/1ii8TcCmXaxZsB-cIFsAp-p31CaBGWm8l/view?usp=sharing"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Education;
