let offers = document.querySelector('.offers'),
    header = document.querySelector('header'),
    nav_item = document.querySelectorAll('.nav_item'),
    nav_menu = document.querySelector('.nav_menu'),
    header_icon_burger = document.querySelector('.header_icon_burger'),
    same_style_btn = document.querySelector('.same-style_btn'),
    nav_link = document.querySelectorAll('.nav_link'),
    scrolling_line = document.querySelector(".progress_bar"),
    scroll_to = document.querySelector('.scroll'),
    food_options = document.querySelectorAll('.food_option'),
    option_toggle_icon = document.querySelector('.option_toggle-icon'),
    second_options_wrapper = document.querySelector('.second_options-wrapper');

nav_item.forEach(elem => {
    elem.addEventListener('click', () => {
        nav_item.forEach(item => {
            item.classList.remove('active')
        })
        elem.classList.add('active')
        nav_menu.classList.remove('active')
    })
})

food_options.forEach(elem => {
    elem.addEventListener('click', () => {
        food_options.forEach(item => {
            item.classList.remove('choosed')
        })
        elem.classList.add('choosed')
    })
})
console.log(food_options);

function headerScroll() {
    if (window.scrollY > 0) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}

window.addEventListener('scroll', () => {
    headerScroll()
    updateProgressBar()
})

header_icon_burger.addEventListener('click', () => {
    nav_menu.classList.toggle('active')
})

same_style_btn.addEventListener('click', () => {
    offers.style.opacity = '1'
    offers.innerHTML = '1'
})

nav_link.forEach(elem => {
    elem.addEventListener('click', () => {
        document.body.scroll(0, 1000)
    })
})

function updateProgressBar() {
    const {
        scrollTop,
        scrollHeight
    } = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    scrolling_line.style.width = `${scrollPercent}`;
}

option_toggle_icon.addEventListener('click', () => {
    
})