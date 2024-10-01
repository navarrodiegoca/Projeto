function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag imagem
  const imagem = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver ilght mode, adicionar a imagem light
    imagem.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver imagem sem light mode, manter a imagem normal
    imagem.setAttribute("src", "./assets/avatar.png")
  }
}
