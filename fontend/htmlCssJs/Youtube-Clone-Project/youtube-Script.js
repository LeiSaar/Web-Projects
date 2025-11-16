const menuIcon = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

menuIcon.addEventListener("click", 
     ()=>{
      sideBar.classList.toggle("small-sidebar");
      container.classList.toggle("largerContainer");
     });