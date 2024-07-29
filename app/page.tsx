import { BlogPosts } from "app/components/posts";
import Projects from "./projects/page";
import Image from "next/image";
import profile from "./images/profile.png"

import TechStack from "./components/TechStack";
export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to my Portfolio
      </h1>
<div className="flex flex-col gap-4">
      <Image  className="border-white rounded-[50%] border-5 " id="GoToButton" src={profile} alt="sahil picture"  height={150}></Image>
      <p className="mb-4 text-2xl ">

        Hey, I'm Sahil Pradhan. I'm a <span className="bg-blue-400 text-white px-1">full stack web developer</span> based in India. I
        work mainly with React,Nextjs, express.
      </p>
      </div>
      <TechStack></TechStack>

      <Projects></Projects>
    </section>
  );
}
