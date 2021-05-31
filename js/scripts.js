

const header__title  = document.getElementById("header__title");

document.addEventListener("DOMContentLoaded", ()=>{
    animateHeaderTitle(header__title)
})

const animateHeaderTitle = (headerTitle) => {
    header__title.addEventListener("click", () => {
        headerTitle.classList.toggle("animateHeaderTitle")
    })
}