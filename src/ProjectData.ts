// @ts-ignore
export enum Technologies{
    python="Python",
    react="Rect - Typescript",
    docker="docker",
    githubActions="Github Actions",
    javaSpringWeb="java - spring web",
    javaSpringSecurity="java - spring Security",
    c="C",
    cSharp="C#",
    softwareDesign="Software Design",
    mySQL="MySQL",
    mongoDB="MongoDb",
    sqlLite="SqlLite",
    nginx="Nginx",
    express="Express",
    auth="Oauth"
}

export interface Project{
    projectName:string,
    description:string,
    githubUrls:string[]
    technologiesUsed: Technologies[]
    liveUrl:string
}

export const  projects:Project[] = [
    {
        projectName:"Gold System",
        description:"This project was created to manage the amount of gold in a gold store. It also generates invoices and tracks who is creating each invoice.",
        technologiesUsed:[
            Technologies.javaSpringSecurity,
            Technologies.javaSpringWeb,
            Technologies.docker,
            Technologies.react,
            Technologies.mySQL,
            Technologies.githubActions,
            Technologies.nginx
        ],
        githubUrls:[
            "https://github.com/moab01567/gold-system-backend",
            "https://github.com/moab01567/gold-system-frontend"],
        liveUrl:"https://gold.wrkspace.dev"
    },
    {
        projectName:"Social elite news",
        description:"Just a random funny project. You can log in with Google or GitHub. It’s like a mini social media web app where users can create and like posts. Only users signed in with GitHub can create posts.",
        technologiesUsed:[
            Technologies.express,
            Technologies.docker,
            Technologies.react,
            Technologies.mongoDB,
            Technologies.githubActions,
            Technologies.nginx,
            Technologies.auth
        ],
        githubUrls:[
            "https://github.com/moab01567/moab01567-soscial-elite-react-express"],
        liveUrl:"https://elite.wrkspace.dev"
    },
    {
        projectName:"Events old (Social elite news)",
        description:"I recommend checking out Social Elite News. This is  an older project.\nIt’s a random, funny little project where you can log in with Google or EntraID. It’s kind of like a mini event-publishing web app where users can create and attend events. Only users signed in with EntraID can create events.",
        technologiesUsed:[
            Technologies.express,
            Technologies.docker,
            Technologies.react,
            Technologies.mongoDB,
            Technologies.githubActions,
            Technologies.nginx,
            Technologies.auth
        ],
        githubUrls:[
            "https://github.com/moab01567/React-express-typescript-events"],
        liveUrl:"https://event.wrkspace.dev"
    },
    {
        projectName:"C Exam, Grade == A 😁",
        description:"This was my exam project in C, and I received an A. It demonstrates a deep understanding of memory management, encryption and decryption, as well as designing and handling a custom internet protocol.",
        technologiesUsed:[
            Technologies.c
        ],
        githubUrls:[
            "https://github.com/moab01567/C-in-linux-Agrade"],
        liveUrl:"-"
    },
    {
        projectName:"Fagmenn AS",
        description:"This was the first project I made and sold in high school, when I was 17. It automates boring office tasks by taking a long list of orders in Excel and generating a Word document where each customer gets their own page.",
        technologiesUsed:[
            Technologies.python
        ],
        githubUrls:[
            "https://github.com/moab01567/Fagmenn-AS-program"],
        liveUrl:"-"
    },
    {
        projectName:"Car Finder",
        description:"CarFinder, a project using React and Java (Spring Boot), where my partners can find cars that are approaching their EU inspection",
        technologiesUsed:[
            Technologies.javaSpringSecurity,
            Technologies.javaSpringWeb,
            Technologies.docker,
            Technologies.react,
            Technologies.mySQL,
            Technologies.nginx
        ],
        githubUrls:["https://github.com/moab01567/car"],
        liveUrl:"-"
    },
    {
        projectName:"Software Design",
        description:"This project is primarily focused on software design, where I implement the SOLID principles and use SQLite to perform database migrations. ",
        technologiesUsed:[
            Technologies.cSharp,
            Technologies.softwareDesign,
            Technologies.sqlLite
        ],
        githubUrls:["https://github.com/moab01567/CSharp-software-design"],
        liveUrl:"https://5uml.netlify.app/"
    },
    {
        projectName:"Project before leaning git",
        description:"Project before learning about Git",
        technologiesUsed:[
            Technologies.python,
        ],
        githubUrls:["https://github.com/moab01567/code-before-learning-git/branches"],
        liveUrl:"-"
    },
]

