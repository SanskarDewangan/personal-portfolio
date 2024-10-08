import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const projects = [
      { id: "1", 
        title: "Healthcare Management App", 
        uniqueId: 101, 
        description: "Developed using Next.js and Appwrite as backend, helps users to make appointments", 
        demoLink: "", 
        githubLink: "https://github.com/SanskarDewangan/Healthcare-Management-App", 
        techStack: [{ text: "NextJs" },{text: "TypeScript"},{text: "Appwrite"},{text: "Shadcn"},{text: "Tailwind CSS"},{text: "Twilio"}], 
        image: { url: "/projects/healthcare.png" } 
      },
      { id: "2", 
        title: "Expense Tracker", 
        uniqueId: 102, 
        description: "Developed an Expense tracker to help users monitor and manage their daily expenses.", 
        demoLink: "", 
        githubLink: "https://github.com/SanskarDewangan/Expense-Tracker", 
        techStack: [{ text: "NextJs" },{text: "Tailwind CSS"},{text: "Drizzle ORM"},{text: "JavaScript"},{text: "Clerk"},{text: "Shadcn"}], 
        image: { url: "/projects/expense.png" } 
      },
      { id: "5", 
        title: "Todo App", 
        uniqueId: 105, 
        description: "Developed using React.js and Tailwind CSS that allows users to add, update, and delete tasks also helps users to organized and manage the task.", 
        demoLink: "https://todo-app-neon-six-99.vercel.app/", 
        githubLink: "https://github.com/SanskarDewangan/TODO-APP", 
        techStack: [{ text: "React" },{ text: "Tailwind CSS" },{ text: "JavaScript" }], 
        image: { url: "/projects/todo.png" } 
      },
      { id: "6", 
        title: "Password Generator", 
        uniqueId: 106, 
        description: "A password generator app that creates strong, secure passwords. Users can customize length and character types, ensuring safety for online accounts.", 
        demoLink: "https://password-generator-react-app-two.vercel.app/", 
        githubLink: "https://github.com/SanskarDewangan/Password-Generator-React-App", 
        techStack: [{ text: "React" },{ text: "CSS" },{ text: "JavaScript" }], 
        image: { url: "/projects/password_generator.jpg" } 
      },
      { id: "7", 
        title: "Gemini Clone", 
        uniqueId: 107, 
        description: "Developed Gemini clone using React.js and Tailwind CSS and integrated Gemini API for searching the task", 
        demoLink: "https://gemini-clone-navy-six.vercel.app/", 
        githubLink: "https://github.com/SanskarDewangan/Gemini-Clone", 
        techStack: [{ text: "React" },{ text: "Tailwind CSS" },{ text: "JavaScript" }], 
        image: { url: "/projects/gemini.jpg" } 
      },
      { id: "3", 
        title: "Grocery Store", 
        uniqueId: 103, 
        description: "CLI based grocery store wriiten in C++ which prints bill after the shopping and uses File Handling Concepts to store and retrieve data.", 
        demoLink: "", 
        githubLink: "https://github.com/SanskarDewangan/Grocery-Store", 
        techStack: [{ text: "C++" }], 
        image: { url: "/projects/grocery.webp" } 
      },
      { id: "4", 
        title: "Library Management", 
        uniqueId: 104, 
        description: "A C++ Library Management System that enables adding, issuing, returning, and removing books, includes separate user and librarian menus.", 
        demoLink: "", 
        githubLink: "https://github.com/SanskarDewangan/Library-Management", 
        techStack: [{ text: "C++" }], 
        image: { url: "/projects/library.png" } 
      }
    ];
  
    res.status(200).json(projects);
  }
  