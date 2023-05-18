let openMenu = document.querySelector('#openMenu')
let toggle = true;

openMenu.addEventListener('click', ()=>{
    let links = document.getElementById('links')
    if(toggle){
        links.style.right = '0'
        toggle = false
    }else{
        links.style.right = '-400px'
        toggle = true    
    }
})
