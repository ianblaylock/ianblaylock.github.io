function initializeMenus() {
    
    function hideAllContentContainers() {
	let elems = document.getElementsByClassName("contentContainer");
	for (var i = 0; i < elems.length; i++) {
	    elems[i].style.display = "none";}
    }

    function hideAllSoftwareProjectContainers() {
	let elems = document.getElementsByClassName("softwareProjectContainer");
	for (var i = 0; i < elems.length; i++) {
	    elems[i].style.display = "none";}
    }

    
    //menu1 buttons
    let aboutMeBtn = document.getElementById("aboutMeMenuItem");
    let projectsBtn = document.getElementById("softwareProjectsMenuItem");
    let skillsBtn = document.getElementById("skillsMenuItem");
    //menu1 sections
    let bio = document.getElementById("bio");
    let projects = document.getElementById("projects");
    let skills = document.getElementById("skills");

    //menu2 buttons
    let obsMonitorBtn = document.getElementById("obsMonitorMenuItem");
    let gageScatterplotBtn = document.getElementById("gageScatterplotMenuItem");
    let hydroDataViewerBtn = document.getElementById("hydroDataViewerMenuItem");
    let quickHydroBriefBtn = document.getElementById("quickHydroBriefMenuItem");
    //menu2 sections
    let menu2 = document.getElementById("menu2");
    
    let obsMonitor = document.getElementById("obsMonitor");
    let gageScatterplot = document.getElementById("gageScatterplot");
    let hydroDataViewer = document.getElementById("hydroDataViewer");
    let quickHydroBrief = document.getElementById("quickHydroBrief");

    //which is the selected menu2 item?
    let selectedSoftwareProject = obsMonitor;
    
    function hideMenu2() { menu2.style.display = "none";}
    function showMenu2() { menu2.style.display = "block";}

    hideAllContentContainers();
    bio.style.display = "block";
    hideAllSoftwareProjectContainers();
    selectedSoftwareProject.style.display = "block";
    aboutMeBtn
	.addEventListener("click",
			  function() {hideMenu2();
				      hideAllContentContainers();
				      bio.style.display = "block";
				     });
    projectsBtn
	.addEventListener("click",
			  function() {showMenu2();
				      hideAllContentContainers();
				      selectedSoftwareProject.style.display = "blcock";
				      projects.style.display = "block";
				     });
    skillsBtn
	.addEventListener("click",
			  function() {hideMenu2();
				      hideAllContentContainers();
				      skills.style.display = "block";
				      skillScoreToSVG();
				     });

    obsMonitorBtn
	.addEventListener("click",
			  function() {hideAllSoftwareProjectContainers();
				      selectedSoftwareProject = obsMonitor;
				      obsMonitor.style.display = "block";
				     });

    gageScatterplotBtn
	.addEventListener("click",
			  function() {hideAllSoftwareProjectContainers();
				      selectedSoftwareProject = gageScatterplot;
				      gageScatterplot.style.display = "block";
				     });

    hydroDataViewerBtn
	.addEventListener("click",
			  function() {hideAllSoftwareProjectContainers();
				      selectedSoftwareProject = hydroDataViewer;
				      hydroDataViewer.style.display = "block";
				     });    
    quickHydroBriefBtn
	.addEventListener("click",
			  function() {hideAllSoftwareProjectContainers();
				      selectedSoftwareProject = quickHydroBrief;
				      quickHydroBrief.style.display = "block";
				     });

    
}

document.getElementById("menu2").style.display = "none";
initializeMenus();



function initializeVideos() {
    let michaelVideo = document.getElementById("michaelVideo");
    let florenceVideo = document.getElementById("florenceVideo");
    florenceVideo.style.display = "block";
    let michaelButton = document.getElementById("michaelButton");
    let florenceButton = document.getElementById("florenceButton");
    
    michaelButton
	.addEventListener("click",
			  function() {michaelButton.style.borderColor = "rgb(236,88,0)";
				      florenceButton.style.borderColor = "#ffffff";
				      florenceVideo.style.display = "none";
				      michaelVideo.style.display = "block";
				      
				     });

    florenceButton
	.addEventListener("click",
			  function() {florenceButton.style.borderColor = "rgb(236,88,0)";
				      michaelButton.style.borderColor = "#ffffff";
				      michaelVideo.style.display = "none";
				      florenceVideo.style.display = "block";});
				      
}

initializeVideos();


function skillScoreToSVG() {
    var skillScoreValueMap = {"Java":10, "Clojure":10, "Perl":9,
			      "Ruby":7, "Python":7, "FORTRAN":5,
			      "Bash":5, "Julia":4, "SQL":8,
			      "PostgreSQL":9, "MySQL":7, "Javascript": 7,
			      "Subversion":9, "Git": 6, "Swing/AWT": 10,
			      "Tk": 6,"HTML": 8,"CSS": 8, "Elm": 3,
			      "FL Studio": 10, "Audacity":8, "Overtone":10,
			      "javax.sound":8};

    function colorOnGradient(bound1,bound2,j) {
	let p = (j - bound1.x) / (bound2.x - bound1.x);
	let newRed = Math.round(bound1.red * (1 - p) + bound2.red * p);
	let newGreen = Math.round(bound1.green * (1 - p) + bound2.green * p);
	let newBlue = Math.round(bound1.blue * (1 - p) + bound2.blue * p);
	return `rgb(${newRed},${newGreen},${newBlue})`;
    }

    let skills = document.getElementsByClassName("skill");
    for (var i = 0; i < skills.length; i++) {
	let skillName = skills[i].getElementsByClassName("skillName")[0].innerHTML;
	let scoreDiv = skills[i].getElementsByClassName("skillScore")[0];
	let skillRank = skillScoreValueMap[skillName];
	let svg = `<svg viewBox="0 0 10 1" onresize="skillScoreToSVG()">`;
	for (var j = 0; j < skillRank; j++) {
	    let newColor = (j <= 5) ?
		colorOnGradient({x: 0, red:236, green:88, blue:0},
				{x: 5, red:236, green:236, blue:0},j) :
		colorOnGradient({x: 5, red:236, green:236, blue:0},
				{x: 10, red:88, green:236, blue:0}, j);
		
	    svg = svg +
		`<circle cx="${j+0.5}" cy="0.4" r="0.35" fill="${newColor}" />`;
	}
	svg = svg + "</svg>";
	scoreDiv.innerHTML = svg;
    }
	
}

