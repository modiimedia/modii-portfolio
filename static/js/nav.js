let header = document.querySelector("header.navbar")

// sticky nav stuff
document.addEventListener("scroll", function(){
    if(document.body.clientWidth > 769) {
        makeNavSticky(22);
    }
    else {
        makeNavSticky(0)
    }
})

function makeNavSticky(scrollDistance) {
    if(document.body.scrollTop > scrollDistance || document.documentElement.scrollTop > scrollDistance) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
}

// Mobile Nav Menu

let navTriggers = document.querySelectorAll(".navbar-burger");
let navClosers = document.querySelectorAll(".navbar-close")
let navBackground = document.getElementById("m-nav-background");
let navMenus = document.querySelectorAll(".navbar-menu")
let htmlTag = document.querySelector("html");

for(let i=0; i < navTriggers.length; i++){
    let current = navTriggers[i]
    current.addEventListener("click", function(){
        let target = current.dataset.target
        openMobileNav(target)
    })
}

for(let i=0; i < navClosers.length; i++){
    let current = navClosers[i];
    current.addEventListener("click", function(){
        closeMobileNav();
    })
}

function openMobileNav(targetMenu){
    htmlTag.classList.add("menu-open")
    navBackground.classList.add("active")

    let menu = document.getElementById(targetMenu)
    menu.classList.add("active")
}

function closeMobileNav(){
    htmlTag.classList.remove("menu-open");
    navBackground.classList.remove("active");
    for(let i=0; i < navMenus.length; i++){
        navMenus[i].classList.remove("active");
    }
}