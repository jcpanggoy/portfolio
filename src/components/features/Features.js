import React from "react";
import { AiOutlineCode, AiFillMobile, AiOutlineGlobal } from "react-icons/ai";
import { FaPython, FaJava, FaLaptopCode } from "react-icons/fa";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Proof of Excellence" des="Certificates" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Software Development Process and Methodologies"
          des="Learned software development life cycles: Agile, Scrum, and Waterfall."
          icon={<AiOutlineCode />}
          link="https://drive.google.com/file/d/18Hp4GRPkHYexolM1mNyxqkcTWn14enfo/view?usp=sharing"
        />
        <Card
          title="Career Skills in Software Development"
          des="Learned key concepts of developing software applications."
          icon={<FaLaptopCode />}
          link="https://drive.google.com/file/d/1eYNL7BKSaMNW-xBE-PxP7zv1tYt4RbAQ/view?usp=sharing"
        />
        <Card
          title="Career Essentials in Software Development"
          des="Key skills acquired through training provided by Microsoft and LinkedIn."
          icon={<AiFillMobile />}
          link="https://drive.google.com/file/d/16hS4Ui4Y1wpbIEJJMY7_y5wCJYVFMOKZ/view?usp=sharing"
        />
        <Card
          title="Introduction to Data Science in Python"
          des="Mastered the basics of data science programming with Python."
          icon={<FaPython />}
          link="https://drive.google.com/file/d/1vuViFvEi-Mw2X55mPcaMRxhLEceUxUts/view?usp=sharing"
        />
        <Card
          title="Java Object-Oriented Programming"
          des="Acquired skills in Java programming and object-oriented concepts."
          icon={<FaJava />}
          link="https://drive.google.com/file/d/1wnMVRR3IQecl9N91dDdfm31ddglfAW-T/view?usp=sharing"
        />
        <Card
          title="Programming Foundations Beyond the Fundamentals"
          des="Developed advanced programming skills beyond basic concepts."
          icon={<AiOutlineGlobal />}
          link="https://drive.google.com/file/d/1GOuSzyFH26wXv4H18cL8nHjbZ_BtHnAA/view?usp=sharing"
        />
      </div>
    </section>
  );
};

export default Features;
