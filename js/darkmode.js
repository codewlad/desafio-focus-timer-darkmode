export function DarkMode({
    btnDarkMode
}) {
    function toogleDarkMode() {
        const tagHtml = document.querySelector("html")
        const allImages = document.querySelectorAll("img")
        tagHtml.classList.toggle("darkMode")
        
        for(let cont = 0; cont < allImages.length; cont++){
            allImages[cont].classList.toggle("darkModeImg")
        }        

        if(tagHtml.classList.contains("darkMode")) {
            btnDarkMode.src = "./assets/btn-dark.svg"
            btnDarkMode.alt = "Botão com o desenho de uma lua, para ligar o modo claro"            
        } else {
            btnDarkMode.src = "./assets/btn-light.svg"
            btnDarkMode.alt = "Botão com o desenho de um sol, para ligar o modo escuro"
        }
    }

    return {
        toogleDarkMode
    }
}