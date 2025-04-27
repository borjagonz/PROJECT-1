
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