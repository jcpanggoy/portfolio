import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check Out My Works! I'd Love to Hear Your Feedback!"
          des="Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="LAKBAYAN"
          des="A Travel-Social Itinerary Mobile Application with Derived Enhanced Simulated Annealing Algorithm."
          src={projectThree}
          githubLink="https://github.com/miyukiandjia/lakbayan.git"
          liveLink="https://www.sciencedirect.com/science/article/pii/S1877050924006501?dgcid=rss_sd_all"
        />
        <ProjectsCard
          title="WAISMAIS"
          des="An IoT-Enhanced Corn Disease Diagnosis through a Mobile Application Using Decision Tree Classifier for Soil NPK Analysis and YOLOv8 for Disease Identification."
          src={projectOne}
          githubLink="https://github.com/miyukiandjia/Thesis-WAISMAIS.git"
          liveLink="https://drive.google.com/file/d/1r9rUzeNv6GkTiKy6l6iQH5f5mThJrwxB/view?usp=sharing"
        />
        <ProjectsCard
          title="FIELDMATE"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          githubLink="https://github.com/jcpanggoy/fieldmate.git"
          liveLink="https://drive.google.com/file/d/1S5UHVhiMjdi0_qwXPx-BsmxyOikxPddO/view?usp=sharing"
        />
        <ProjectsCard
          title="KISLAP"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFour}
          githubLink="https://github.com/jcpanggoy/kislap.git"
          liveLink="https://drive.google.com/file/d/1tck9Y4TeY0ZdZyMeIpbITon_WKAJgN3M/view?usp=sharing"
        />
        <ProjectsCard
          title="MMCM IFO Booking System"
          des="An intuitive platform that streamlines resource requests and reservations, ensuring efficient management and real-time availability tracking within MMCM."
          src={projectFive}
          githubLink="https://github.com/jcpanggoy/ifo.git"
          liveLink="https://ifo-booking-system-live-link.com"
        />
        <ProjectsCard
          title="PizzaStop Inventory System"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectSix}
          githubLink="https://github.com/your-username/pizza-inventory-system"
          liveLink="https://pizza-inventory-system-live-link.com"
        />
      </div>
    </section>
  );
};

export default Projects;
