const togglebutton = document.getElementById("themeToggle") //id se get kiya 
const body = document.body

togglebutton.addEventListener("click" , () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")){
        togglebutton.innerHTML = '<i class="fas fa-sun"></i>' ;
    }
    else {
        togglebutton.innerHTML = '<i class="fas fa-moon"></i>'; // ye icon change karega 
    }
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navl");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
