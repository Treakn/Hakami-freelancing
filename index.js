const burgerbtn = document.querySelector('.burgerbtn')
const burgermenu = document.querySelector('.burger-menu')
const closeburger= document.querySelector('.close-burger')

burgerbtn.addEventListener('click' , ()=>{
    burgermenu.classList.add('active')
})


closeburger.addEventListener('click',()=>{
    burgermenu.classList.remove('active')
})