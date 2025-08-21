import { useRef, useState } from "react";

const skills = [
  {
    title: "AI and Generative AI",
    icon: (
      <svg
        className="svg-icons"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#2de897"
        height="28px"
      >
        <path d="M256 0a21.33 21.33 0 0 0-21.33 21.33v21.34a21.33 21.33 0 0 0 42.66 0V21.33A21.33 21.33 0 0 0 256 0zM170.67 42.67a21.33 21.33 0 0 0-21.34 21.33v42.67H106.7a42.67 42.67 0 0 0-42.7 42.66v42.67H42.67a21.33 21.33 0 1 0 0 42.67H64v85.32H42.67a21.33 21.33 0 1 0 0 42.67H64v42.67a42.67 42.67 0 0 0 42.7 42.66h42.63v42.67a21.33 21.33 0 1 0 42.67 0V448h85.33v42.67a21.33 21.33 0 1 0 42.67 0V448h42.63a42.67 42.67 0 0 0 42.7-42.66v-42.67H469.3a21.33 21.33 0 1 0 0-42.67H448v-85.32h21.33a21.33 21.33 0 1 0 0-42.67H448v-42.67a42.67 42.67 0 0 0-42.7-42.66h-42.63V64a21.33 21.33 0 0 0-42.67 0v42.67h-85.33V64a21.33 21.33 0 0 0-21.34-21.33zM149.33 128h213.34A21.33 21.33 0 0 1 384 149.33v213.34a21.33 21.33 0 0 1-21.33 21.33H149.33A21.33 21.33 0 0 1 128 362.67V149.33A21.33 21.33 0 0 1 149.33 128zm50.67 64a10.67 10.67 0 0 0-10.28 8.05l-32 128a10.67 10.67 0 1 0 20.66 5.23L187.6 298h36.8l8.22 33.28a10.67 10.67 0 1 0 20.66-5.23l-32-128a10.67 10.67 0 0 0-10.28-8.05zm7.57 33.92L219.4 277h-25.47zM277.33 192a10.67 10.67 0 1 0 0 21.33h21.34v85.34h-21.34a10.67 10.67 0 1 0 0 21.33h53.34a10.67 10.67 0 1 0 0-21.33H309.3v-85.34h21.37a10.67 10.67 0 1 0 0-21.33z"></path>
      </svg>
    ),
    content: [{ section: "Generative AI" }, { section: "Applications of AI" }],
  },
  {
    title: "Web Development",
    icon: <i className="ri-global-line text-2xl text-[#3BE698]"></i>,
    content: [
      { section: "Frontend Development" },
      { section: "Backend Development" },
      { section: "DevOps and Web3" },
      { section: "Version Control" },
    ],
  },
  //   {
  //     title: "Advance Frontend",
  //     icon: <i className="ri-javascript-line text-2xl text-[#3BE698]"></i>,
  //     content: [{ section: "Three Js" }],
  //   },
  {
    title: "DSA with JavaScript",
    icon: (
      <svg
        className="svg-icons pt-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        fill="none"
        height="45px"
        stroke="#2de897"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Root */}
        <circle cx="100" cy="30" r="10" fill="#2de897" />

        {/* Left Child */}
        <circle cx="60" cy="80" r="10" fill="#2de897" />

        {/* Right Child */}
        <circle cx="140" cy="80" r="10" fill="#2de897" />

        {/* Left-Left Child */}
        <circle cx="40" cy="130" r="10" fill="#2de897" />

        {/* Left-Right Child */}
        <circle cx="80" cy="130" r="10" fill="#2de897" />

        {/* Right-Left Child */}
        <circle cx="120" cy="130" r="10" fill="#2de897" />

        {/* Right-Right Child */}
        <circle cx="160" cy="130" r="10" fill="#2de897" />

        {/* Connecting lines */}
        <line x1="100" y1="30" x2="60" y2="80" />
        <line x1="100" y1="30" x2="140" y2="80" />
        <line x1="60" y1="80" x2="40" y2="130" />
        <line x1="60" y1="80" x2="80" y2="130" />
        <line x1="140" y1="80" x2="120" y2="130" />
        <line x1="140" y1="80" x2="160" y2="130" />
      </svg>
    ),
    content: [
      { section: "Fundamentals" },
      { section: "Data Structures" },
      { section: "Algorithms" },
      { section: "Object Oriented Programming (OOPs)" },
    ],
  },
  {
    title: "Version Control",
    icon: <i className="ri-git-branch-line text-2xl text-[#3BE698]"></i>,
    content: [{ section: "Git & Github" }],
  },
  {
    title: "Aptitude & Reasoning",
    icon: <i className="ri-a-b text-2xl text-[#3BE698]"></i>,
    content: [
      { section: "Quantitive Aptitude" },
      { section: "Logical Reasoning" },
      { section: "Verbal Reasoning" },
    ],
  },
];

function AccordionItem({ skill }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div className="border-b border-gray-700 py-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between items-center cursor-pointer"
      >
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-md bg-[#14281D] flex items-center justify-center">
            {skill.icon}
          </div>
          <h2 className="text-white select-none text-lg md:text-4xl font-semibold">
            {skill.title}
          </h2>
        </div>
        <div className="expand flex items-center justify-center gap-2">
          <span className="hidden md:inline font-semibold">Expand</span>
          <i
            className={`ri-arrow-down-s-line text-2xl text-white transition-transform duration-500 ${
              open ? "rotate-180" : ""
            }`}
          ></i>
        </div>
      </button>

      <div
        ref={ref}
        className="overflow-hidden transition-all duration-700 pl-9"
        style={{
          maxHeight: open ? ref.current?.scrollHeight : 0,
        }}
      >
        <div className="pt-7">
          {skill.content.map((section, i) => (
            <div key={i} className="mb-3 w-[95%] m-auto">
              <h3 className="text-white text-md md:text-2xl font-semibold">
                {section.section}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillsAccordion() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <div className="w-full md:w-[90%] space-y-3">
        {skills.map((skill, index) => (
          <AccordionItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
