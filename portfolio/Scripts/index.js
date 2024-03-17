function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

var menuLinks = document.querySelectorAll("#menu a");
for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function() {
        if (window.innerWidth <= 600) { // Defina aqui a largura máxima para aplicar o comportamento
            toggleMenu();
        }
    });
}

function mudouTamanho(){
    if (window.innerWidth >= 600){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
}