const projects = {
    "ellevate-football": {
        title: "Ellevate Football",
        date: "Training Plans | 2024",
        cover: "./resources/projects/ellevate football.jpg",
        summary: "Description for Ellevate Football project.",
        background: "Writing a background for the Ellevate Football project about how great it was, how great the company is, and how great I will be at your company. We will continue talking about all the great things this project achieved, but first we get into why it was a difficult project. <br> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        role: "Here, I will go into detail explaining my role. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        research: "We start with how this was researched. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        planning: "The planning and design phase. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        development: "Working with engineering, design, etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        launch: "Go to Market strategy, marketing campaigns, and more interesting tidbits. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image1: "./resources/projects/ellevate football.jpg",
        image2: "./resources/projects/ellevate football.jpg",
        image3: "./resources/projects/ellevate football.jpg",
        image4: "./resources/projects/ellevate football.jpg",
        alt: "Picture of the Ellevate Football project",
        takeaway1: "The very first point about what we learned at this project.",
        takeaway2: "The second more important point about what we learned at this project.",
        takeaway3: "The last but not least point about what we learned at this project.",
        next1: "What are we going to do next about this very cool and interesting project.",
        next2: "How are we ever going to top all the amazing shit we did here, along with making sure this stands out by itself.",        
        next3: "Have we peaked too soon or have we not done enough about this project."
    }, 

    "manchester-united": {
        title: "Manchester United",
        date: "D2C Monetization Strategy | 2021",
        cover: "./resources/projects/manutd.jpg",
        summary: "",
        background: "",
        role: "",
        research: "",
        planning: "",
        development: "",
        launch: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        alt: "Picture of the Manchester United project",
        takeaway1: "",
        takeaway2: "",
        takeaway3: "",
        next1: "",
        next2: "",        
        next3: ""
    },

    "macys": {
        title: "Macy's",
        date: "Lean Labs | 2018",
        cover: "./resources/projects/macys.jpg",
        summary: "",
        background: "",
        role: "",
        research: "",
        planning: "",
        development: "",
        launch: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        alt: "Picture of the Macy's project",
        takeaway1: "",
        takeaway2: "",
        takeaway3: "",
        next1: "",
        next2: "",        
        next3: ""
    },

    "vested-finance": {
        title: "Vested Finance",
        date: "Transfer Funds | 2020",
        cover: "./resources/projects/vested finance.jpg",
        summary: "",
        background: "",
        role: "",
        research: "",
        planning: "",
        development: "",
        launch: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        alt: "Picture of the Vested Finance project",
        takeaway1: "",
        takeaway2: "",
        takeaway3: "",
        next1: "",
        next2: "",        
        next3: ""
    }
 
};


    const projectKey = new URLSearchParams(window.location.search).get('project');
    if (projectKey && projects[projectKey]) {
        const project = projects[projectKey];
        document.title += ' ' + project.title

        document.getElementById('case-title').textContent = project.title;
        document.querySelector('.case-summary h3').textContent = project.date
        document.querySelector('.case-summary p').textContent = project.summary
        document.querySelector('.case-summary img').src = project.cover
        document.querySelector('.case-summary img').alt = project.title

        document.querySelector('.case-background p').innerHTML = project.background
        document.querySelector('.role p').innerHTML = project.role

        document.getElementById('research').innerHTML = project.research;
        document.getElementById('planning').innerHTML = project.planning;
        document.getElementById('development').innerHTML = project.development;
        document.getElementById('launch').innerHTML = project.launch;

        document.querySelector('.study-image img:nth-child(1)').src = project.image1
        document.querySelector('.study-image img:nth-child(1)').alt = project.alt
        document.querySelector('.study-image img:nth-child(2)').src = project.image2
        document.querySelector('.study-image img:nth-child(2)').alt = project.alt
        document.querySelector('.study-image img:nth-child(3)').src = project.image3
        document.querySelector('.study-image img:nth-child(3)').alt = project.alt
        document.querySelector('.study-image img:nth-child(4)').src = project.image4
        document.querySelector('.study-image img:nth-child(4)').alt = project.alt

        document.querySelector('.takeaways li:nth-child(1)').textContent = project.takeaway1
        document.querySelector('.takeaways li:nth-child(2)').textContent = project.takeaway2
        document.querySelector('.takeaways li:nth-child(3)').textContent = project.takeaway3
        document.querySelector('.next-steps li:nth-child(1)').textContent = project.next1
        document.querySelector('.next-steps li:nth-child(2)').textContent = project.next2
        document.querySelector('.next-steps li:nth-child(3)').textContent = project.next3
    }

   
