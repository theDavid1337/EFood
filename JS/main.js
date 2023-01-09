let offers = document.querySelector('.offers');
let header = document.querySelector('header');
let nav_item = document.querySelectorAll('.nav_item');
let nav_menu = document.querySelector('.nav_menu');
let header_icon_burger = document.querySelector('.header_icon_burger');
let same_style_btn = document.querySelector('.same-style_btn');


nav_item.forEach(elem => {
    elem.addEventListener('click', () => {
        nav_item.forEach(item => {
            item.classList.remove('active')
        })
        elem.classList.add('active')
        nav_menu.classList.remove('active')
    })
})

function headerScroll() {
    if (window.scrollY > 0) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}

window.addEventListener('scroll', headerScroll)

header_icon_burger.addEventListener('click', () => {
    nav_menu.classList.toggle('active')
})

// header_btn.addEventListener('click', () => {
//     offers.style.opacity = '1'
//     setInterval(() => {
//         offers.innerHTML = counter
//     }, 500);
//     counter++
// })
// header_btn.addEventListener('click', () => {

// })
same_style_btn.addEventListener('click', () => {
    let counter = 1
    offers.style.opacity = '1'
    offers.innerHTML = counter
    
})