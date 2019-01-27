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
    
    function hideMenu2() {menu2.style.display = "none";}
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

