import Link from "next/link"

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16" id="links" >
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center bg-blue-700 p-4  border-[1px] border-white  rounded-xl font-bold"
            id="GoToButton"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/sahil-pradhan-46a0a31b7/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Linkedln</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center bg-blue-700 p-4  border-[1px] border-white  rounded-xl font-bold"
            id="GoToButton"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/s2ahil/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center bg-blue-700 p-4  border-[1px] border-white  rounded-xl font-bold"
            id="GoToButton"
            rel="noopener noreferrer"
            target="_blank"
            href="https://devpost.com/s2ahil"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Dev Post</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} Feel free to say hi here 👋 <span className="underline "> <a href="mailto:sahilpradhan411@gmail.com"> sahilpradhan411@gmail.com</a></span>
      </p>
    </footer>
  )
}
