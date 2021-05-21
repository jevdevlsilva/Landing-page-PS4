var botao = document.querySelector(".navbar-menu_icon")
botao.addEventListener("click", aparecer)

function aparecer(){
    var menu = document.querySelector("#menujs");
    if (menu.style.top == "-200px"){
        menu.style.top = "75px"
}else{
    menu.style.top = " -200px"
}

}
/* var botao = document.querySelector(".navbar-menu_icon")
botao.addEventListener("click", aparecer)

function aparecer(){
    var menu = document.querySelector(".menu");
    if (menu.style.height == "0px"){
        menu.style.height = "122px"
}else{
    menu.style.height = "0"
}

} */

