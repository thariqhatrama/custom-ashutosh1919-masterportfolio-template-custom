const settings = {
  isSplash: false,
};

const seo = {
  title: "Thariqhat Rama's Portfolio",
  description:
    "Building clean web apps and integrating AI agents. Focused on Next.js, React, and Tailwind CSS.",
  og: {
    title: "Thariqhat Rama Portfolio",
    type: "website",
    url: "https://github.com/thariqhatrama",
  },
};

const greeting = {
  title: "Thariqhat Rama",
  logo_name: "Thariqhat Rama",
  nickname: "thariqhatrama",
  subTitle:
    "Building clean web apps and integrating AI agents. Focused on Next.js, React, and Tailwind CSS.",
  resumeLink: "#",
  portfolio_repository: "https://github.com/thariqhatrama/minimal-portfolio-showcase",
  githubProfile: "https://github.com/thariqhatrama",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/thariqhatrama",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/thariqhatrama/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/thariqhatrama",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
  {
    name: "Gmail",
    link: "mailto:thariqhatrama@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  }
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux, Next.js & Vue",
        "⚡ Developing mobile applications using Flutter and React Native",
        "⚡ Creating application backend in Node, Express & FastAPI",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "AI Integration & Automation",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Integrating LLMs and building custom autonomous AI agents",
        "⚡ Designing and implementing automated backend cron jobs and CLI workflows",
        "⚡ Setting up prompt engineering templates and agent tools",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/thariqhatrama/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Software Engineering & Web Development",
      subtitle: "Professional Self-Directed & AI Integrations Specialist",
      logo_path: "iiitk_logo.png",
      alt_name: "Self-Directed",
      duration: "Present",
      descriptions: [
        "⚡ I study full-stack web architectures, APIs, and modern JS/TS frameworks.",
        "⚡ I build and test AI agent automations, backend workflows, and dynamic user interfaces.",
      ],
      website_link: "https://github.com/thariqhatrama",
    },
  ],
};

const certifications = {
  certifications: [],
};

const experience = {
  title: "Experience",
  subtitle: "Work and Projects",
  description: "I build modern web systems and automate processes using AI models and tools.",
  sections: [
    {
      title: "Work",
      work: true, // Mark this section as work to satisfy SeoHeader schema parser
      experiences: [
        {
          title: "Software Engineer & AI Specialist",
          company: "Freelance",
          company_url: "https://github.com/thariqhatrama",
          logo_path: "google_logo.png",
          duration: "2026 - Present",
          location: "Medan/Solo, Indonesia",
          description: "Designing frontend interfaces and writing backend integration pipelines using modern AI technologies.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Personal Projects",
      experiences: [
        {
          title: "AI Agent Portfolio Generator",
          company: "Open Source",
          company_url: "https://github.com/thariqhatrama",
          logo_path: "google_logo.png",
          duration: "2026",
          location: "Medan/Solo, Indonesia",
          description: "Built an automated system that finds, refactors, and deploys clean portfolio showcases to GitHub under MIT terms, striping AI slop and boilerplate.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

const workExperiences = {
  experience: [
    {
      title: "Software Engineer & AI Specialist",
      company: "Freelance",
      description: "Designing frontend interfaces and writing backend integration pipelines.",
    }
  ]
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "",
  email_address: "thariqhatrama@gmail.com",
};

// Add missing exports required by Projects.js & ContactComponent.js & SeoHeader.js
const projectsHeader = {
  title: "Projects",
  description: "Some of my favorite open source and custom web development projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: []
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description: "Discuss a project or just want to say hi? My inbox is open for all.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "I write tech articles and share my developer journey.",
    link: "https://github.com/thariqhatrama",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Medan / Solo, Indonesia",
    avatar_image_path: "address_image.svg",
    locality: "Medan / Solo",
    country: "Indonesia",
    region: "Sumatra / Central Java",
    postalCode: "",
    streetAddress: ""
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "",
  },
};

const openSource = {
  githubUserName: "thariqhatrama",
  githubConvertedToken: "", // Token empty so it falls back to public fetch if no query
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  workExperiences,
  contactInfo,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  openSource,
};
