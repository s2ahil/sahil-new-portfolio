import { BlogPosts } from "app/components/posts";
import Projects from "./projects/page";
export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to my Portfolio
      </h1>
      <p className="mb-4">
        Hey, I'm Sahil Pradhan. I'm a full stack developer based in India. I
        work mainly with React,Nextjs, express.
      </p>

      <Projects></Projects>
    </section>
  );
}
