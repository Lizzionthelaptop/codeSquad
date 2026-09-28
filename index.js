
const projectList = document.querySelectorAll(".project");
    
let currentProject = 0;

projectList[1].style.display="none";
projectList[2].style.display="none";

const nextProject= document.getElementById("next");
nextProject.addEventListener("click", function(){
    projectList[currentProject].style.display="none";
    currentProject = currentProject +1;
    projectList[currentProject].style.display="block";
});
const previousProject= document.getElementById("previous");
previousProject.addEventListener("click", function(){
    projectList[currentProject].style.display="none";
    currentProject = currentProject -1;
    projectList[currentProject].style.display="block";
});

const displayMode = document.getElementById("light_mode");

const body = document.body;

body.classList.add("light_mode");

displayMode.addEventListener("click", () => {
    if (body.classList.contains("light_mode")) {
        body.classList.replace("light_mode", "dark_mode");
        displayMode.textContent = "☾";
    } else {
        body.classList.replace("dark_mode", "light_mode");
        displayMode.textContent = "☼";
    }
});