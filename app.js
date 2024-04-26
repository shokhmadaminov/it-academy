const menuBtn = document.querySelectorAll("button.sitenav__link")

menuBtn.forEach((button)=> {
    button.addEventListener("click", ()=> {
        button.nextElementSibling.classList.toggle("hidden")
        button.children[0].classList.toggle("rotate")
    })
})
