// Open modal
const openModal = document.querySelectorAll(".open-btn");
const closeModal = document.querySelectorAll(".close-btn");

openModal.forEach(element => {
     element.addEventListener("click", () => {
        element.nextElementSibling.showModal();
    })
})

closeModal.forEach(element => {
    element.addEventListener("click", () => {
        element.parentElement.close();
    })
})

// open sidebar mobile
const sidebar = document.querySelector(".sidebar");
const openSidebar = document.querySelector(".hamburger-icon")
const closeSidebar = document.querySelector(".close-icon")

openSidebar.addEventListener("click", ()=> {
    sidebar.style.display = "flex";
})

closeSidebar.addEventListener("click", ()=> {
    sidebar.style.display = "none";
})