document.addEventListener('scroll', function(){
    const rolagem = document.querySelector("header")
    rolagem.classList.toggle('rolagem', window.scrollY > 0)
})

document.addEventListener('scroll', function(){
    const rolagem = document.querySelector(".header")
    rolagem.classList.toggle('rolagem', window.scrollY > 0)
})

const hamburguer = document.querySelector(".hamburguer")
const navMenu= document.querySelector("nav ul")

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle('active')
    navMenu.classList.toggle('active')
})