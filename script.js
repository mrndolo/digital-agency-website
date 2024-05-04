let menuBtn = document.querySelector('.toggle')
let navlist = document.querySelector('.nav-list')

menuBtn.addEventListener('click', ()=>{
    navlist.classList.toggle('active')
})