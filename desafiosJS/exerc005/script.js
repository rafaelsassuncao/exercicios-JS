const imagens = document.querySelectorAll("#galeria li img");

function galeriaTrocar(event) {
  console.log(event);

}

function galeriaClique(imagem) {
  imagem.addEventlistener('click', galeriaTrocar);
}

imagens.forEach();