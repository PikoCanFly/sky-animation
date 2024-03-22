document.addEventListener("DOMContentLoaded", () =>{
    const sky = document.getElementById("sky");
    const cloudNum = 25;

    function createClouds(){
        const cloud = document.createElement("img");
        const randomSize = Math.random() * 400 + 800 ;
        cloud.style.width = randomSize + "px";
        cloud.src = "cloud.png";
        sky.appendChild(cloud);
        cloud.classList.add("cloud");
    }
    for (let i = 0; i < cloudNum ; i++){
    createClouds();
    }
})