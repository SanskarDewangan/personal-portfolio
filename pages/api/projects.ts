import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const projects = [
      { id: "1", 
        title: "Healthcare Management App", 
        uniqueId: 101, 
        description: "A sample project", 
        demoLink: "", 
        githubLink: "", 
        techStack: [{ text: "NextJs" },{text: "TypeScript"},{text: "Appwrite"}], 
        image: { url: "/projects/healthcare.png" } 
      },
      { id: "2", 
        title: "Expense Tracker", 
        uniqueId: 102, 
        description: "Developed an Expense tracker to help users monitor and manage their daily expenses.", 
        demoLink: "", 
        githubLink: "", 
        techStack: [{ text: "NextJs" },{text: "Tailwind CSS"},{text: "Drizzle ORM"},{text: "PostgreSQL"},{text: "Clerk"}], 
        image: { url: "/projects/healthcare.png" } 
      },
      { id: "5", 
        title: "Todo App", 
        uniqueId: 105, 
        description: "A Todo App developed using React.js and Tailwind CSS that allows users to add, edit, and delete tasks.", 
        demoLink: "https://todo-app-neon-six-99.vercel.app/", 
        githubLink: "", 
        techStack: [{ text: "React" },{ text: "Tailwind CSS" },{ text: "JavaScript" }], 
        image: { url: "/projects/todo.png" } 
      },
      { id: "6", 
        title: "Password Generator", 
        uniqueId: 106, 
        description: "A password generator app that creates strong, secure passwords. Users can customize length and character types, ensuring safety for online accounts.", 
        demoLink: "https://password-generator-react-app-two.vercel.app/", 
        githubLink: "", 
        techStack: [{ text: "React" },{ text: "CSS" },{ text: "JavaScript" }], 
        image: { url: "/projects/password_generator.jpg" } 
      },
      { id: "7", 
        title: "Gemini Clone", 
        uniqueId: 107, 
        description: "A sample project", 
        demoLink: "https://gemini-clone-navy-six.vercel.app/", 
        githubLink: "", 
        techStack: [{ text: "React" },{ text: "Tailwind CSS" },{ text: "JavaScript" }], 
        image: { url: "/projects/gemini.jpg" } 
      },
      { id: "3", 
        title: "Grocery Store", 
        uniqueId: 103, 
        description: "CLI based grocery store wriiten in C++ which prints bill after the shopping and uses File Handling Concepts to store and retrieve data.", 
        demoLink: "", 
        githubLink: "", 
        techStack: [{ text: "C++" }], 
        image: { url: "/projects/grocery.webp" } 
      },
      { id: "4", 
        title: "Library Management", 
        uniqueId: 104, 
        description: "A C++ Library Management System that enables adding, issuing, returning, and removing books, includes separate user and librarian menus.", 
        demoLink: "", 
        githubLink: "", 
        techStack: [{ text: "C++" }], 
        image: { url: "/projects/library.png" } 
      }
    ];
  
    res.status(200).json(projects);
  }
  