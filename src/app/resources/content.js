import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Elhassan",
  lastName: "DAHMOUCHI",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "hassandahmouchi0@gmail.com",
  location: "Africa/Casablanca", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Arabic","Frensh"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Dahmouchi",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hassan-dahmouchi-a9539333a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Alert & Analysis System</strong></>,
    href: "#",
  },
  subline: (
    <>
      I'm Elhassan, a passionate developer focused on building smart web solutions.
      <br /> Currently working on an alert reporting and analysis project to help report and study incidents.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Elhassan is a Morocco-based web developer passionate about creating smart solutions
        for real-world problems. His work focuses on building alert reporting and analysis systems,
        combining technology and innovation to improve incident management and response.
      </>
    ),
  },
  
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "BuildalittleBiz",
        timeframe: "2024 - Present",
        role: "Full-Stack Developer (Internship and Freelance)",
        achievements: [
          <>
            Worked on an <strong>Alert Reporting and Analysis System</strong> to help organizations monitor, report, and analyze incidents effectively.
          </>,
          <>
            Contributed to the development of a <strong>School Management System</strong> for handling students, classes, content, absences, grades, and payment management.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Freelance Projects",
        timeframe: "2022 - Present",
        role: "Freelance Web & Mobile Developer",
        achievements: [
          <>
            Built <strong>GFY International</strong> — an e-commerce platform for car and automobile accessories.
          </>,
          <>
            Developed multiple responsive landing pages and websites using <strong>Next.js</strong>, <strong>TailwindCSS</strong>, and modern UI/UX practices.
          </>,
        ],
        images: [],
      },
      {
        company: "Bachelor Internship Project",
        timeframe: "2022",
        role: "Mobile Developer",
        achievements: [
          <>
            Developed a <strong>React Native mobile game</strong> for primary school students to enhance learning and engagement.
          </>,
        ],
        images: [],
      },
      {
        company: "Final Year Project - CoursaMaroc",
        timeframe: "2021",
        role: "Mobile App Developer",
        achievements: [
          <>
            Created <strong>CoursaMaroc</strong>, a mobile application for taxi management, focusing on booking, tracking, and trip management.
          </>,
        ],
        images: [],
      },
    ],
    
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University Mohamed V, Rabat",
        description: <>Master's degree in Software Development and Business Intelligence Engineering (Ingénierie de Développement Logiciel et Décisionnel).</>,
      },
      {
        name: "Higher School of Technology, Salé",
        description: <>Bachelor's degree in Mobile Application Engineering (with honors).</>,
      },
      {
        name: "Higher School of Technology, Beni Mellal",
        description: <>DUT in Computer Engineering (with honors).</>,
      },
      {
        name: "High School Diploma",
        description: <>Baccalaureate in Physical Sciences and Chemistry.</>,
      },
    ],
  },
  
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
