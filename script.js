function hideAllLv11Sections() {
    let elems = document.getElementsByClassName("level1Section");
    for(var i = 0; i < elems.length; i++) {
	elems[i].style.display = "none";
    }
}

function displayLvl1Section(elemId) {
    hideAllLv11Sections();
    document.getElementById(elemId).style.display = "block";
}
var lvl1Dict = {"aboutMeListItem": "aboutMe",
		"softwareProjectsListItem": "softwareProjects"};

for (var key in lvl1Dict) {
    let value = lvl1Dict[key];
    document.getElementById(key)
	.addEventListener("click", function() {displayLvl1Section(value);});}		

var softwareDict = {"puertoRicoRadarMenuItem": "puertoRicoRadar",
		    "obsMonitorMenuItem": "obsMonitor",
		    "hydroDataViewerMenuItem": "hydroDataViewer",
		    "quickHydroBriefMenuItem": "quickHydroBrief"};

function hideAllSoftwareSections() {
    let elems = document.getElementsByClassName("softwareSection");
    for (var i = 0; i < elems.length; i++) {
	elems[i].style.display = "none";
    }
}

function displaySoftwareSection(elemId) {
    hideAllSoftwareSections();
    document.getElementById(elemId).style.display = "block";}

for (var key in softwareDict) {
    let value = softwareDict[key];
    document.getElementById(key)
	.addEventListener("click", function() {displaySoftwareSection(value);});}
