let body = document.querySelector("body");

let profile = document.querySelector(".profile");
document.querySelector("#user-btn").onclick = ()=>{
    profile.classList.toggle('active');
}

let sidebar = document.querySelector(".side-bar");
document.querySelector("#menu-btn").onclick = ()=>{
    sidebar.classList.toggle('active');
    body.classList.toggle('active');
}

window.onscroll=()=>{
   profile.classList.remove('active');
}

