const profileMenu = document.getElementById("profileMenu");
const navProfileIcon = document.querySelector(".nav-profile-img");
const sideActivity = document.getElementById("sidebarActivity");
const moreLink = document.getElementById("showMoreLink");

navProfileIcon.addEventListener("click", 
  () => profileMenu.classList.toggle("open-menu"));



moreLink.addEventListener("click",  () => 
  {
   sideActivity.classList.toggle("open-activity");
   if(sideActivity.classList.contains("open-activity")){
      moreLink.innerHTML = "Show less <b>-</b>";
   }
   else{
    moreLink.innerHTML = "Show more <b>+</b>";
   }
});
  


