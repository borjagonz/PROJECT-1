
const button_top = document.getElementById("button_top")
    button_top.addEventListener('click', () => {
        window.scrollTo(0, 0)
    })

window.onscroll = () => {
    if (window.scrollY < 300){
        button_top.classList.remove("button-top-on")
    } else {
        button_top.classList.add("button-top-on")
    }
    console.log(window.scrollY)
}

window.onload = () => {
    button_top.classList.remove("button-top-on")
}

const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const button_contact = document.querySelector("#button_contact")

open.addEventListener("click", () => {
    nav.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
})

open.addEventListener("click", () => {
    button_contact.classList.add("visible");
})

close.addEventListener("click", () => {
    button_contact.classList.add("visible");
})
