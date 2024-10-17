import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Academic</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="President's List"
            subTitle="Mapúa Malayan Colleges Mindanao (2021 - Expected 2024)"
            result="DVO PH"
            des="Consistently achieved President’s List status with a General Weighted Average (GWA) ranging from 1.25 to 1.05."
          />
          <ResumeCard
            title="High Honors"
            subTitle="San Pedro College Basic-Education Department (2019 - 2021)"
            result="DVO PH"
            des="Ranked 5 among 76 Grade 12 Students of Class 2020 - 2021. Consistently achieved With High Honor status with a GWA ranging from 95 to 97."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Published</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="LAKBAYAN: A Travel-Social Itinerary Application with Derived Enhanced Simulated Annealing"
            subTitle="Procedia Computer Science (March 29, 2024)"
            result="INTL"
            des="Co-authored a research article focused on optimizing travel-social itineraries using derived enhanced simulated annealing techniques."
            link="https://www.sciencedirect.com/science/article/pii/S1877050924006501"
          />
          {/* <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
