const menuBtn = document.querySelector('.toggle-bar');
const toggleSection = document.querySelector('.toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.side-bar');

menuBtn.addEventListener("click", ()=>{
    sidebar.classList.add('active');
   toggleSection.classList.add('hidden');
   
})

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.remove('active');
    toggleSection.classList.remove('hidden');

})