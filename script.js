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