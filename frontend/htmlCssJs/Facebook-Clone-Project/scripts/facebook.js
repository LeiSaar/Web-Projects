const settingsMenu = document.querySelector('.settings-menu');
const userIcon = document.querySelector('.nav-user-icon');
const darkBtn = document.getElementById('dark-btn');
/*
userIcon.addEventListener('click', ()=>settingsMenu.classList.toggle('settings-menu-opacity'));

// optional: close setting menu when clicking outside
document.addEventListener('click', event => {
  if(!settingsMenu.contains(event.target) && !userIcon.contains(event.target)){
      settingsMenu.classList.remove("settings-menu-opacity");}
  });
*/

/*
1. User clicks anywhere on the document
2. Browser creates Event object with click details
3. Browser passes this object to your funciton as event
4. event.target = the exact element that was clicked
5. chick if click was outside both settings menu and user icon
6.if outside, remove the opacity class to hide the menu
*/

document.addEventListener('DOMContentLoaded', () => {
  // Verify elements exist
  if (!settingsMenu || !userIcon) {
    console.error('Required elements not found');
    return;
  }

  //toggle menu
  userIcon.addEventListener('click', () => settingsMenu.classList.toggle('settings-menu-opacity'));

  //close when clicking outside
  document.addEventListener('click', event => {
    const clickedInsideMenu = settingsMenu.contains(event.target);
    const clickedOnIcon = userIcon.contains(event.target);

    if (!clickedInsideMenu && !clickedOnIcon) {
      settingsMenu.classList.remove('settings-menu-opacity');
    }
  });

  //prevent menu from closing when clicking inside
  settingsMenu.addEventListener('click', event => {
    event.stopPropagation();
  });

});


darkBtn.onclick = ()=>{
  darkBtn.classList.toggle('dark-btn-on');
};


/* change to dark mode*/
darkBtn.addEventListener('click', () =>{
  darkBtn.classList.toggle('dark-btn-on');
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark");
  }else{
    localStorage.setItem("theme", "light");
  }
});


if(localStorage.getItem("theme") === "light"){
     darkBtn.classList.remove('dark-btn-on');
     document.body.classList.remove("dark-theme");
} else if(localStorage.getItem("theme") === "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else{
    localStorage.setItem("theme", "light");
}

