function initializeVideos() {
    let michaelVideo = document.getElementById("michaelVideo");
    let florenceVideo = document.getElementById("florenceVideo");
    michaelVideo.style.display = "block";
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
