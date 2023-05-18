let openMenu = document.querySelector('#openMenu')
let search = document.querySelector('#search')
let cart = document.querySelector('#cart')

let menuToggle = true;
let searchToggle = true;
let cartToggle = true;

openMenu.addEventListener('click', ()=>{
    let links = document.getElementById('links')
    if(menuToggle){
        links.style.right = '0'
        menuToggle = false
    }else{
        links.style.right = '-400px'
        menuToggle = true    
    }
})

search.addEventListener('click', ()=>{
    if(searchToggle){
        document.querySelector('#query').style.display = 'block'
        searchToggle = false
    }else{
        document.querySelector('#query').style.display = 'none'
        searchToggle = true
    }
})

cart.addEventListener('click', ()=>{
    let items = document.querySelector('#cartItems')
    if(cartToggle){
        items.style.right = '0'
        cartToggle = false
    }else{
        items.style.right = '-500px'
        cartToggle = true
    }
})