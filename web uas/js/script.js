let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    console.log('asdasd')
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

Window.onscroll = () =>{

    menu.classList.remove ('fa-times');
    navbar.classList.toggle('active');
    
}






