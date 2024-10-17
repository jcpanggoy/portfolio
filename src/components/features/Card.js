import React from "react";

const Card = ({ title, des, icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group"
    >
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-6 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="text-5xl text-designColor">{icon}</div>
          <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
            {title}
          </h2>
          <p className="base">{des}</p>
          <span className="mt-auto text-base font-semibold text-designColor">
            View Certificate →
          </span>
        </div>
      </div>
    </a>
  );
};

export default Card;
