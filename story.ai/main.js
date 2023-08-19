const mobile = document.getElementById("menu");
const navList = document.getElementById("hidden-menu")

mobile.addEventListener("click", () =>{
    navList.classList.toggle("active");
});