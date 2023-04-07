const s3 = "https://maskoff.s3.ca-central-1.amazonaws.com/"
export var Data = {
  "Experience":[
    
    //Yihe
    {
      CompanyLogo:s3 + "yihe3.PNG",
      title:"Full Stack Developer",
      CompanyName:"Yihe Tech",
      startTime:"May, 2018",
      endTime:"Aug, 2019",
      responsibilities:
      [
       "Startup project — “Something like a Reddit on the map, for China”",
       "       Solo building the whole thing, from a blank page to publish.",
       "       50-ish pages commercial-ready App, deep engagement with large scale program",
       "Frontend",
       "       Experienced React Native developer. Wrote about 32,000 lines of React Native code, hundreds of components, ejected from Expo. ",
       "       Mastered linking, Android Studio and Xcode",
       "       Firm grasp on JavaScript, ES6 syntax and Redux",
       "       Deep engaged with performance optimization and most community packages",
       "Backend",
       "       Python3.7 backend, Flask/WSGI framework, about 10,000 lines",
       "       REST API design, Multi-threaded structure, Docker included",
       "       Elasticsearch as search engine",
       "       Use DynamoDB and MongoDB as database",
       "DevOps",
       "       Runs on AWS EC2, Lambda",
       "       Maintaince globally scaled server",
       "       DynamoDB global data syncronization",
       "Testing",
       "       React Native UI Testing",
       "       Backend testing by Python Unittest"
      ]
    },
    //CB2 Insights
    {
      CompanyLogo:s3 + "cb2insights.jpg",
      title:"Full Stack Developer",
      CompanyName:"CB2 Insights",
      startTime:"Sept, 2019",
      endTime:"Nov, 2019",
      responsibilities:
      [
       "Scrum environment",
       "Developing a React website and a React Native App Includes GraphQL and Redux",
       "Also taking Angular jobs from another group",
       "Developing a C# backend on .NET framework",
       "Maintaining an Elixir backend on Phoenix framework With GraphQL integrated"
      ]
    },
    // Kirain
    {
      CompanyLogo:s3 + "kirain.jpg",
      title:"Backend Developer",
      CompanyName:"Kirain Inc.",
      startTime:"Jan, 2020",
      endTime:"Nov, 2020",
      responsibilities:
      [
       "Backend and DevOps role",
       "Designed company's software architecture, navigated solutions according to customers' needs",
       "Backend",
       "       Designed and Built REST API for multiple ML-related products with Python, Anaconda, DynamoDB and Elasticsearch",
       "DevOps",
       "       Deployed backend to AWS Lambda/EC2 and maintained servers, also set up security protocols on AWS"
      ]
    },
    // RBC
    {
      CompanyLogo:s3 + "rbc-royal-bank-logo.jpeg",
      title:"Frontend Developer",
      CompanyName:"Royal Bank of Canada",
      startTime:"Mar, 2020",
      endTime:"Mar, 2021",
      responsibilities:
      [
       "Pure frontend role",
       "Built and maintained several enterprise level internal banking tools from scratch using Angular, TypeScript, SCSS and NGRX.",
       "       The tool built for adjudicators (CAT Tool) is very popular inside RBC right now",
       "       Built Persona Builder for RBC designers with an extremely interactive input system which includes a draggable and resizable multi-editing panel",
       "       Maintained and contributed to RBC's file management system (Galileo)",
       "Resolved browser compability issues among Safari, IE and Chrome",
       "Work in Agile/Scrum/Jira environment"
      ]
    },
  ],
  Skills:{
    "Languages":[
      {"name":"Python",
       "mastery_level":"proficient"},
      {"name":"JavaScript",
       "mastery_level":"proficient"},
      {"name":"TypeScript",
       "mastery_level":"proficient"},
      {"name":"SCSS/CSS",
       "mastery_level":"proficient"},
      {"name":"C",
       "mastery_level":"intermediate"},
       {"name":"Java",
       "mastery_level":"basic"},
    ],
    "Frontend":[
      {"name":"Angular",
       "mastery_level":"proficient"},
      {"name":"React Native",
       "mastery_level":"proficient"},
      {"name":"React",
       "mastery_level":"intermediate"},
      
    ],
    "Web_Frameworks":[
      {"name":"Flask",
       "mastery_level":"proficient"},
      {"name":"WSGI",
       "mastery_level":"intermediate"},
      {"name":"Django",
       "mastery_level":"intermediate"},
    ],
    "DevOps":[
      {"name":"AWS Lambda",
       "mastery_level":"proficient"},
      {"name":"AWS EC2",
       "mastery_level":"proficient"},
      {"name":"Git",
       "mastery_level":"proficient"},
    ],
    "Database":[
      {"name":"DynamoDB",
       "mastery_level":"proficient"},
      {"name":"SQL",
       "mastery_level":"proficient"},
      {"name":"GraphQL",
       "mastery_level":"intermediate"},
      {"name":"MongoDB",
       "mastery_level":"intermediate"},
    ],
    "Tooling":[
      {"name":"Expo",
       "mastery_level":"intermediate"},
      {"name":"Android Studio",
       "mastery_level":"intermediate"},
      {"name":"Xcode",
       "mastery_level":"intermediate"},
      {"name":"Serverless Sls",
       "mastery_level":"intermediate"},
      {"name":"Docker",
       "mastery_level":"basic"},
    ],
    "Others":[
      {"name":"ElasticSearch",
       "mastery_level":"intermediate"},
    ],

  },
  Projects:[
    {
      gif_moving:s3 + "maskoff-title.gif",
      gif_static:s3 + "maskoff-title.gif",
      title:"MASKOFF   👉👉👉 CLICK ME!!!",
      type:"Mobile App   👉👉👉 CLICK ME!!!",
      tech:["React Native","Python3","Flask/WSGI","Redux","Xcode","Android Studio","AWS Lambda","AWS EC2","ElasticSreach","DynamoDB"],
      href:"https://github.com/leonyhenn/MASKOFF",
      year:2019
    },
    {
      gif_moving:s3 + "ml-final.gif",
      gif_static:s3 + "ml-final.gif",
      title:"Speaker Identification and Speech Recognition",
      type:"Machine Learning Program",
      tech:["Python","Gaussian Mixture Models"],
      href:"https://github.com/leonyhenn/speech_recognizing",
      year:2019
    },
    {
      gif_moving:s3 + "penpen_eva_code.gif",
      gif_static:s3 + "penpen_eva_code.gif",
      title:"File System",
      type:"System Programming",
      tech:["C","Git","Linux commands"],
      href:"https://github.com/leonyhenn/filesystem",
      year:2018
    },
    {
      gif_moving:s3 + "ai_pacman.gif",
      gif_static:s3 + "ai_pacman.gif",
      title:"Multi-Agent Pacman",
      type:"Aritificial Intelligence Program",
      tech:["Python","Path Search Algorithms"],
      href:"https://github.com/leonyhenn/Multiagent_Pacman",
      year:2018
    }
  ]
}