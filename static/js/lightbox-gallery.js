let allImages = document.querySelectorAll(".lightboxContainer img")

for(let i = 0; i < allImages.length; i++){
    let img = allImages[i]
    img.classList.add("lightboxItem")
    if(img.hasAttribute("data-img")){console.log("data-img already set")}
    else {
        let src = img.src;
        let newSrc = src.replace("w_1000,q_60,f_auto", "w_1200,c_fit,q_80,f_auto") 
        img.setAttribute("data-img", newSrc)
    };
}

let imgGallery = document.querySelectorAll(".lightboxItem");
let lightboxContainer = document.querySelector("#lightbox");
let lightboxImage = document.querySelector("#lightboxImg")
let lightboxCloseButtons = document.querySelectorAll(".lightboxClose")
let pageBody = document.querySelector("html");

for(let i = 0; i < imgGallery.length; i++){
    imgGallery[i].addEventListener("click", function(){
        openLightbox(imgGallery[i]);
    })
}

for(let i = 0; i < lightboxCloseButtons.length; i++){
    lightboxCloseButtons[i].addEventListener("click", function(){
        closeLightbox();
    })
}

function openLightbox(imageBlock){
    pageBody.style.overflow = "hidden"
    lightboxContainer.classList.add("active");
    let newImage = imageBlock.getAttribute("data-img");
    lightboxImage.src = newImage;
}

function closeLightbox(){
    pageBody.style.overflow = ""
    lightboxContainer.classList.remove("active");
    lightboxImage.src = ''
}