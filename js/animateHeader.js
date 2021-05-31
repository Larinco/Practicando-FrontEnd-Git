

const animateHeaderTitle = (headerTitle) => {
    header__title.addEventListener("click", () => toggleClass(headerTitle, "animateHeaderTitle"))
}

const toggleClass = (element, classToggle) => element.classList.toggle(classToggle)

export {animateHeaderTitle, toggleClass}