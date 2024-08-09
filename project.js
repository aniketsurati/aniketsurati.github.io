const projects = {
    "ellevate-football": {
        title: "Ellevate Football",
        date: "Training Plans | 2024",
        image: "./resources/projects/ellevate football.jpg",
        description: "Description for Ellevate Football project."
    },
    "manchester-united": {
            title: "Manchester United",
            image: "path/to/manchester-united.jpg",
            description: "Working with Manchester United...<br>It was a great experience..."
        },
        "macys": {
            title: "Macy's",
            image: "path/to/macys.jpg",
            description: "This project involved redesigning...<br>It resulted in..."
        },
        "vested-finance": {
            title: "Vested Finance",
            image: "path/to/vested-finance.jpg",
            description: "Vested Finance helps users...<br>The project required..."
        }
    // Additional projects here...
};


    const projectKey = new URLSearchParams(window.location.search).get('project');
    if (projectKey && projects[projectKey]) {
        const project = projects[projectKey];
        document.title += ' ' + project.title
        document.getElementById('case-title').textContent = project.title;
        document.querySelector('.case-summary h3').textContent = project.date
        document.querySelector('.case-summary img').src = project.image
 
    }
