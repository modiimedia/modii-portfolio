let header = document.querySelector("header.navbar")

document.addEventListener("scroll", function(){
    if(document.body.scrollTop > 22 || document.documentElement.scrollTop > 22) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
})