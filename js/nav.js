const menuBtn = document.querySelector(".menu-icon .fa-bars");
const menuBtnClose = document.querySelector(".menu-icon .fa-times");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
const nav=document.querySelector("nav")
menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    menuBtnClose.classList.remove("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}
menuBtnClose.onclick = () => {
    items.classList.remove("active");
    menuBtnClose.classList.add("hide");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
}
cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = () => {
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}
// nav.onscroll=()=>{
//     nav.style.background="white";
// }