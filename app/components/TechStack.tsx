import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const TechStack = () => {
  return (
    <div className="flex flex-col gap-4 my-2">
      <div className="text-3xl">TechStack</div>
      <div className=" flex space-x-4 gap-2">
      <FaReact className=" text-blue-500 text-6xl" />
      <RiNextjsFill className=" text-white text-6xl" />
      <DiMongodb className=" text-green-500 text-6xl" />
      <SiExpress className=" text-gray-500 text-6xl" />

      </div>
    </div>
  );
};

export default TechStack;
