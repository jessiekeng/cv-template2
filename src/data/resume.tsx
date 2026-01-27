import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Keng Zi Xing",
  initials: "KZX",
  url: "https://github.com/jessiekeng",
  location: "Selangor, Malaysia",
  locationLink: "https://www.google.com/maps/place/Selangor",
  description:
    "Data Science Student at Sunway University. Passionate about AI, Full-Stack Development, and Data Analytics.",
  summary:
    "17-year-old Data Science student with a 3.9 CGPA and a recipient of the Sunway Entrance Scholarship. I specialize in bridging the gap between Data Analytics and Software Engineering through hands-on projects in RAG-based AI chatbots and Full-Stack development.",
  avatarUrl: "/me.png", 
  skills: [
    "Python", "SQL", "Java", "JavaScript", "TypeScript", "React", "Node.js", 
    "Express", "MongoDB", "Next.js", "Angular", "Spring Boot", "RAG", "LLM", "Pandas", "Power BI"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "zixingkeng@gmail.com",
    tel: "+601163314598",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jessiekeng",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jessie-keng",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Sunway AI Builders Club",
      href: "#",
      badges: ["Leadership"],
      location: "Sunway University",
      title: "Secretary",
      logoUrl: "/sunway.png",
      start: "2025",
      end: "Present",
      description: "Co-organized Deloitte Innovation Training and supported AI-based agriculture web app presentations. Coordinated logistics, technical setup, and venue arrangements for events with 50+ attendees.",
    },
    {
      company: "Sunway Education",
      href: "#",
      badges: ["Service"],
      location: "Sunway University",
      title: "Student Ambassador",
      logoUrl: "/sunway.png",
      start: "2024",
      end: "2024",
      description: "Represented Sunway University during Open Days. Conducted campus tours and provided program information. Recognized with a Certificate of Appreciation.",
    },
    {
      company: "School of American Degree Program",
      href: "#",
      badges: ["Communication"],
      location: "Sunway University",
      title: "Communication Department Member",
      logoUrl: "/sunway.png",
      start: "2024",
      end: "2024",
      description: "Developed marketing materials and supported event planning for academic and student engagement activities.",
    },
  ],
  education: [
    {
      school: "Sunway University",
      href: "https://sunwayuniversity.edu.my/",
      degree: "BSc (Hons) in Data Science (Year 1.5 | CGPA: 3.9)",
      logoUrl: "/sunway.png",
      start: "2024",
      end: "2027",
    },
    {
      school: "Sri Emas International School",
      href: "#",
      degree: "Cambridge IGCSE (10 A*)",
      logoUrl: "/sriemas.png",
      start: "2018",
      end: "2023",
    },
  ],
  certificates: [
    { title: "Full Stack Open", issuer: "University of Helsinki", link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/02151d342347f33850e71d8fd6dd67b3" },
    { title: "Retrieval-Augmented Generation (RAG)", issuer: "DeepLearning.AI", link: "#" },
    { title: "Google Cloud Credly Skill Badges", issuer: "Google", link: "https://www.credly.com/users/zi-xing-keng" },
    { title: "Programming for Everybody (Python)", issuer: "University of Michigan", link: "#" },
    { title: "Foundations: Data, Data, Everywhere", issuer: "Google", link: "#" },
    { title: "Foundations of UX Design", issuer: "Google", link: "#" },
    { title: "Financial Markets", issuer: "Yale University", link: "#" },
  ],
  projects: [
    {
      title: "AI Chatbot Portfolio",
      href: "https://github.com/jessiekeng",
      dates: "2025",
      active: true,
      description: "Developed RAG-based chatbots using LangChain and LLMs. Tuned temperature and prompt structures.",
      technologies: ["Python", "Jupyter Notebook", "LLM", "RAG"],
      links: [{ type: "Source", href: "https://github.com/jessiekeng", icon: <Icons.github className="size-3" /> }],
      image: "",
      video: "",
    },
    {
      title: "JavaFX Movie Ticketing System",
      href: "https://github.com/jessiekeng/JavaFx_Movie_System",
      dates: "2025",
      active: true,
      description: "Built a desktop application with SQL integration and booking validation.",
      technologies: ["Java", "JavaFX", "SQL"],
      links: [{ type: "Source", href: "https://github.com/jessiekeng/JavaFx_Movie_System", icon: <Icons.github className="size-3" /> }],
      image: "",
      video: "",
    },
    {
      title: "PyGame Arcade Project",
      href: "https://github.com/jessiekeng/pygame_project",
      dates: "2024",
      active: false,
      description:
        "Developed an arcade-style game using PyGame with real-time score tracking, collision detection, event-driven player controls, and finite game states (start, active play, game over).",
      technologies: ["Python", "PyGame"],
      links: [
        {
          type: "Source",
          href: "https://github.com/jessiekeng/pygame_project",
          icon: <Icons.github className="size-3" />,
    },
      ],
      image: "",
      video: "",
    },
  ],
} as const;