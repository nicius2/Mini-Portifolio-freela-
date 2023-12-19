function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode, adicionar imagem light
        img.setAttribute("src", "./assents/dark.png")
    } else {
        // set tiver sem light mode, mantem a imagem normal
        img.setAttribute("src", "./assents/light.png")
    }
}