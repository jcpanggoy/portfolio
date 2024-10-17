import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technical Service Support"
            subTitle="Alorica (Dec 2023 - Mar 2024)"
            result="DVO PH"
            des="Assisted 100+ Google clients per week with troubleshooting and resolving technical issues with Google Nest products."
            des2="Managed customer cases via Connect Platform, achieving 20+ CSATs monthly and maintaining a 90% first-call resolution rate."
            link="https://drive.google.com/file/d/1ii8TcCmXaxZsB-cIFsAp-p31CaBGWm8l/view?usp=sharing"
          />
          {/* <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Leadership Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="External Vice-President"
            subTitle="MMCM - Computing Students Society (2022 - 2023)"
            result="DVO PH"
            des="Led external activities for the organization."
            des2="Conducted 3 workshops on Microsoft Office Suites for 20+ elementary school teachers to enhance their technological skills."
            link="https://fb.watch/vhdmjxVV0J/"
          />
          <ResumeCard
            title="Community Extension Head"
            subTitle="MMCM - Computing Students Society (2021 - 2022)"
            result="DVO PH"
            des="Spearheaded outreach programs during the pandemic."
            link="https://www.facebook.com/CSS.MMCM"
          />
          {/* <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
