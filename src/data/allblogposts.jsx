export const blogposts = {
    marquis2022: {
        title: "Marquis Energy 2022 Internship",
        id: 1,
        blogposts: {
            
                post1: {
                title: "Internship End Summary",
                id: 1,
                date: "7/29/2022",
                content: `I had a great time at Marquis Energy. I learned a lot and really enjoyed the people and perks offered there.
                I would like to mention my supervisor, Paul Trotter, for guiding me through the experience and always answering my questions.
                I learned a lot about c#, sql, azure, react and other tech stacks. I have linked a github repo of some of my work during the internship below.
                `,
                path: "/1",
                surl1: "/1",
                surl2: "/1",
                simg1: "",
                simg2: "",
                },
               
            
        },
        date: "7/29/2022",
        content: "My Marquis Energy 2022 Summer Internship. Marquis Energy is a large Ethenol Supplier based in Hennepin, Indiana. I worked as a full-stack developer intern over there and learned a lot! I picked a portion of the code I'm actually allowed to share and linked it below.",
        desc: "IT Development Intern Summer 2022",
        path: "blog/marquis22",
        pathToProj: "marquis2022",
        github: "https://github.com/Rexwang8/marquis-internship2022",
        huggingface: "https://huggingface.co/Rexwang8",
        gh_hf:"gh",
        projectimg: "e1",
        tech: "C#, SQL, Azure, React, React-Bootstrap, React-Router, Azure Edgeless Functions, Azure AD, Python, Blazor",
        status: "Completed"
    },

    website: {
        title: "Portfolio Website",
        id: 2,
        blogposts: {
            
                post1: {
                title: "Hello World!",
                id: 1,
                date: "2/4/2023",
                content: `Welcome to the first official devlog post for my website (I actually made this part last, so most of the content is already on the website). Whoops.
                `,
                path: "/1",
                surl1: "/1",
                surl2: "/1",
                simg1: "website",
                simg2: "/1",
                },
                post2: {
                    title: "Blog Improvements",
                    id: 2,
                    date: "2/15/2023",
                    content: `Working on the blog and devlog section of the website mainly. It's a bit tricky since I am working on dynamically generating this entire section from a JSON file.
                    I'm just getting it working first before coming back to make it look nice. I'm also working on the project page and the AI resources page.
                    `,
                    path: "/2",
                    surl1: "/2",
                    surl2: "/2",
                    simg1: "",
                    simg2: "/2",
                    }
            
        },
        date: "1/1/2022",
        content: "Project page for my portfolio website and for the AI resources that I also host on this website. My portfolio website is built with React and hosted on Github Pages. The AI resources were also built with react and are a public resource for anyone to use.",
        desc: "This Portfolio Website and my AI resources.",
        path: "blog/portfolio",
        pathToProj: "portfolio",
        github: "https://github.com/Rexwang8/Rexwang8.github.io",
        huggingface: "https://huggingface.co/Rexwang8",
        gh_hf:"gh",
        projectimg: "website",
        tech: "React, Github Page, gh-pages, Bootstrap, React-Bootstrap, React-Router",
        status: "In Progress"

    },
    qilin: {
        title: "Qilin NLP Large Language Model",
        id: 3,
        blogposts: {
            
                post1: {
                title: "A powerful NLP model",
                id: 1,
                date: "12/25/2022",
                content: `Qilin is a large NLP language model finetuned on Webnovel data. It was built during my time with Coreweave, a new billion dollar GPU cloud hosting service. I used the GPT-J-6B model and finetuned it on Webnovel data. I have linked the huggingface model below.
                `,
                path: "/end",
                surl1: "/end",
                surl2: "/end",
                simg1: "qilinthumb",
                simg2: "/end",
                },
                post2: {
                    title: "Challenges and Solutions",
                    id: 2,
                    date: "1/1/2023",
                    content: `A few challenges I faced during the finetuning process were: Tokens were improperly shuffled, the model was overfitting, the model referenced names too much. I'm attempting to fix these issues in the future by finetuning the model on more data and modifying the tokenizer.
                    `,
                    path: "/2",
                    surl1: "/2",
                    surl2: "/2",
                    simg1: "",
                    simg2: "",
                    }
            
        },
        date: "8/1/2022",
        content: "GPT-J-6B NLP Large Language Model Finetuned on Webnovel Data. This was built during my time with Coreweave, a new billion dollar GPU cloud hosting service.",
        desc: "GPT-J-6B NLP Large Language Model Finetuned on Webnovel Data",
        path: "blog/qilin",
        pathToProj: "qilin",
        github: "https://github.com/Rexwang8/Rexwang8.github.io",
        huggingface: "https://huggingface.co/Rexwang8/qilin-lit-6b",
        gh_hf:"hf",
        projectimg: "qilinthumb",
        tech: "Huggingface, Coreweave Cloud GPUs, Transformers, Pytorch, Python, GPT-J-6B, Webnovel Data",
        status: "In Progress"

    },
    epub: {
        title: "GolangFast Epub Converter",
        id: 4,
        blogposts: {
            
                post1: {
                title: "Blazingly fast epub converter",
                id: 1,
                date: "2/5/2023",
                content: `I needed to write a fast epub to .txt converter for my work during my Coreweave internship. I came up with this, with some help from my supervisor and online resources. It's blazingly fast and can convert a 1000 page book in under 1 seconds. Written with golang!
                `,
                path: "/1",
                surl1: "/1",
                surl2: "/1",
                simg1: "epubweb",
                simg2: "",
                },
            
        },
        date: "2/5/2023",
        content: "Super fast Golang epub to txt converter written for my Coreweave internship.",
        desc: "Golang Fast Epub Converter",
        path: "blog/epub",
        pathToProj: "epub",
        github: "https://github.com/Rexwang8/fast-epubtotxt",
        huggingface: "https://huggingface.co/Rexwang8/qilin-lit-6b",
        gh_hf:"gh",
        projectimg: "epubweb",
        tech: "Golang, Coreweave",
        status: "Completed"

    },
    packagemanager: {
        title: "ECE 461 Package Manager",
        id: 5,
        blogposts: {
            
                post1: {
                title: "CLI Package Manager",
                id: 1,
                date: "2/13/2023",
                content: `This is a CLI package manager that I built for my ECE 461 Software Engineering class. It's built with C# and python. It's a work in progress, but it's functional. I worked on the project with 3 other members
                The plan is to build a CLI in 5 weeks, then swap code with another group and build a GUI in 5 weeks. I'm currently working on the GUI.
                `,
                path: "/1",
                surl1: "/1",
                surl2: "/1",
                simg1: "packagesloc",
                simg2: "",
                },
                post2: {
                    title: "Google Cloud",
                    id: 2,
                    date: "5/25/2023",
                    content: `We have finished our semester project to create the package manager, it took a long time, ~150 hours per person over the duration of 15 weeks, but we are all pretty happy with how the project turned out.
                    `,
                    path: "/2",
                    surl1: "/2",
                    surl2: "/2",
                    simg1: "packagesloc",
                    simg2: "",
                    },
            
        },
        date: "2/13/2023",
        content: "ECE 461 - Software Engineering Package Manager project for NPM. Phase 1 built with C# and python.",
        desc: "ECE 461 - Software Engineering Package Manager.",
        path: "blog/packagemanager",
        pathToProj: "packagemanager",
        github: "https://github.com/Rexwang8/ECE461Phase2",
        huggingface: "https://huggingface.co/Rexwang8/qilin-lit-6b",
        gh_hf:"gh",
        projectimg: "packagesloc",
        tech: "python, c#, dotnet, npm, github actions, google cloud, bigquery, cloud endpoints",
        status: "Completed"
    },
    stellardiffusion: {
        title: "Stellar DIffusion",
        id: 6,
        blogposts: {
            
                post1: {
                title: "CLI Package Manager",
                id: 1,
                date: "2/13/2023",
                content: `This is a CLI package manager that I built for my ECE 461 Software Engineering class. It's built with C# and python. It's a work in progress, but it's functional. I worked on the project with 3 other members
                The plan is to build a CLI in 5 weeks, then swap code with another group and build a GUI in 5 weeks. I'm currently working on the GUI.
                `,
                path: "/1",
                surl1: "/1",
                surl2: "/1",
                simg1: "packagesloc",
                simg2: "",
                },
            
        },
        blogs: false,
        date: "3/1/2023",
        content: "Stellar Diffusion - A finetuned model based on stable diffusion 1.5 finetuned on NASA data. (Mainly hubble)",
        desc: "Stable Diffusion for stars",
        path: "blog/stellardiff",
        pathToProj: "stellardiff",
        github: "https://github.com/Rexwang8/ECE461SoftwareEngineeringProject",
        huggingface: "https://huggingface.co/Rexwang8/stellar-diffusion",
        gh_hf:"hf",
        projectimg: "stellardiff",
        tech: "python, hugginface, coreweave, stable diffusion 1.5, nasa api",
        status: "Completed"
    },
}