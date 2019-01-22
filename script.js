var lvl1Dict = {"aboutMeMenuItem": "aboutMe",
		"softwareProjectsMenuItem": "softwareProjects",
		"skillsMenuItem": "skillsList"};

var softwareDict = {"obsMonitorMenuItem": "obsMonitor",
		    "gageScatterplotMenuItem": "gageScatterplot",
		    "hydroDataViewerMenuItem": "hydroDataViewer",
		    "quickHydroBriefMenuItem": "quickHydroBrief"};

function setTextColorByPropertyValue(elemId,colorTag) {
    document.getElementById(elemId).style.color =
	getComputedStyle(document.body).getPropertyValue(colorTag);
}

function setElementDisplayById(elemId,displayValue) {
    document.getElementById(elemId).style.display = displayValue;
}

function selectMenuItemInDict(dict,dictKey) {
    for (var key in dict) {
	let menuElemId = key;
	let pageElemId = dict[key];
	setTextColorByPropertyValue(menuElemId,(menuElemId === dictKey) ? '--menu-selection-text-color' : '--main-text-color');
	setElementDisplayById(pageElemId,(menuElemId === dictKey) ? "block" : "none");	
    }
}

function initializeMenus() {
    let dictList = [lvl1Dict, softwareDict];
    for (var i = 0; i < dictList.length; i++) {
	let localDict = dictList[i];
	for (var key in localDict) {
	    let localKey = key;
	    let value = localDict[localKey];
	    document.getElementById(localKey)
		.addEventListener("click", function() {selectMenuItemInDict(localDict,localKey);});
	}
    }
}

initializeMenus();
selectMenuItemInDict(lvl1Dict,"aboutMeMenuItem");
selectMenuItemInDict(softwareDict,"obsMonitorMenuItem");
