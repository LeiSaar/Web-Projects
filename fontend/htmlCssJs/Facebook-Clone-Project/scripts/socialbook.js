/*
const settingsmenu = document.querySelector(".settings-menu");
const darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
      settingsmenu.classList.toggle("settings-menu-height");   
}

darkBtn.addEventListener("click", () => 
  {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") === "light"){
      localStorage.setItem("theme", "dark");
    } else{
      localStorage.setItem("theme", "light");
    }
  });

  if (localStorage.getItem("theme") === "light"){
    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove("dark-theme");
  } else if (localStorage.getItem("theme") === "dark"){
      darkBtn.classList.add("dark-btn-on");
      document.body.classList.add("dark-theme");
  } else{
    localStorage.setItem("theme", "light");
  }
*/

const settingsmenu = document.querySelector('.settings-menu');
const navUserIcon = document.querySelector('.nav-user-icon');
const darkBtn = document.getElementById('dark-btn');

navUserIcon.addEventListener("click", () => {
  settingsmenu.classList.toggle("settings-menu-height");
});


darkBtn.addEventListener("click", () => {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
  } else if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "light"){
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme")
} else if (localStorage.getItem("theme") === "dark"){
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else{
  localStorage.setItem("theme", "light");
}

