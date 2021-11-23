let hamBurgerMenu = document.querySelector(".hamburger-img")
let nav = document.querySelector(".nav")
let headerBg = document.querySelector(".header-bg-img")
let flag = true;


hamBurgerMenu.addEventListener("click", () => {
    if(flag){
        nav.style.display = "none"
        flag = false
    }
    else {
        nav.style.display = "block"
        flag = true
    }

    
})
