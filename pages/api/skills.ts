import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const skills = [
      //languages 
      { uniqueId: 1, 
        skill: "CPP",
        id: "1",
        proficient: true, 
        url: "", 
        fieldType: "languages", 
        image: {url: "/images/cpp.webp"} 
      },
      { uniqueId: 2, 
        skill: "JavaScript",
        id: "1",
        proficient: true, 
        url: "", 
        fieldType: "languages", 
        image: { url: "/images/js.webp" } 
      },
      { uniqueId: 3, 
        skill: "TypeScript",
        id: "1",
        proficient: true, 
        url: "", 
        fieldType: "languages", 
        image: { url: "/images/ts.webp" } 
      },
      //frontend
      { uniqueId: 4, 
        skill: "React",
        id: "1",
        proficient: true, 
        url: "", 
        fieldType: "frontend", 
        image: { url: "/images/react.webp" } 
      },
      { uniqueId: 5, 
        skill: "Redux",
        id: "1",
        proficient: true, 
        url: "", 
        fieldType: "frontend", 
        image: { url: "/images/redux.webp" } 
      },
      { uniqueId: 6, 
        skill: "Nextjs",
        id: "1",
        proficient: true, 
        url: "", 
        fieldType: "frontend", 
        image: { url: "/images/react.webp" } 
      },
      { uniqueId: 7, 
        skill: "React Router",
        id: "1",
        proficient: true, 
        url: "", 
        fieldType: "frontend", 
        image: { url: "/images/router.webp" } 
      },
      //Ui Libraries
      { uniqueId: 7, 
        skill: "Tailwind CSS",
        id: "1",
        proficient: true, 
        url: "", 
        fieldType: "uilibraries", 
        image: { url: "/images/tailwind.webp" } 
      },
      { uniqueId: 7, 
        skill: "Shadcn",
        id: "1",
        proficient: true, 
        url: "", 
        fieldType: "uilibraries", 
        image: { url: "/images/shadcn.webp" } 
      },
      { uniqueId: 7, 
        skill: "React Hook Form",
        id: "1",
        proficient: true, 
        url: "", 
        fieldType: "", 
        image: { url: "/images/rhf.webp" } 
      },
      //testing
      { uniqueId: 201, 
        skill: "Git",
        id: "2011",
        proficient: true, 
        url: "", 
        fieldType: "testing", 
        image: { url: "/images/git.webp" } 
      },{ uniqueId: 202, 
        skill: "Postman",
        id: "2012",
        proficient: true, 
        url: "", 
        fieldType: "testing", 
        image: { url: "/images/postman.webp" } 
      },
      //familiar
      { uniqueId: 101, 
        skill: "MySQL",
        id: "1011",
        proficient: false, 
        url: "", 
        fieldType: "", 
        image: { url: "/images/mysql.webp" } 
      },
      { uniqueId: 102, 
        skill: "Express.js",
        id: "1022",
        proficient: false, 
        url: "", 
        fieldType: "", 
        image: { url: "/images/express.webp" } 
      },
      { uniqueId: 103, 
        skill: "Node.js",
        id: "1033",
        proficient: false, 
        url: "", 
        fieldType: "", 
        image: { url: "/images/nodejs.webp" } 
      },
      { uniqueId: 104, 
        skill: "MongoDB",
        id: "1044",
        proficient: false, 
        url: "", 
        fieldType: "", 
        image: { url: "/images/mongodb.webp" } 
      },
    ];
  
    res.status(200).json(skills);
  }
  