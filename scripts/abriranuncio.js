function abrirAnuncios(){
    console.log('abrir anuncio');

    var botoes = document.querySelectorAll(".botao"); //Pega todos os botoes dos anuncios
    var imagens = document.querySelectorAll(".card-image");

    
    botoes.forEach(function(botao) {
        botao.addEventListener("click", function() { //ao clicar no botao ele puxa todos os itens mais proximos aos botoes
            var itemCarro = botao.closest(".collection-item");
            var titulo = itemCarro.querySelector(".card-title").innerText;
            var descricao = itemCarro.querySelector(".card-content p").innerText;
            var foto = itemCarro.querySelector(".card-image img").src;

            var carro = { //atribui itens a uma variavel
                modelo: titulo,
                descricao: descricao,
                foto: foto
            };
            mostrarCarroCompleto(carro);
        });
    });

   imagens.forEach(function(imagem) {
        imagem.addEventListener("click", function() { //ao clicar na imagem ele puxa todos os itens mais proximos a imagem
            var itemCarro = imagem.closest(".collection-item");
            var titulo = itemCarro.querySelector(".card-title").innerText;
            var descricao = itemCarro.querySelector(".card-content p").innerText;
            var foto = itemCarro.querySelector(".card-image img").src;

            var carro = { //atribui itens a uma variavel
                modelo: titulo,
                descricao: descricao,
                foto: foto
            };
            mostrarCarroCompleto(carro);
        });
    });
}



function mostrarCarroCompleto(carro){ //dispara o sweetalert para mostrar o carro em detalhes
    Swal.fire({
        confirmButtonText: 'Confirmar',
        confirmButtonColor: "#2196f3",
        title: carro.modelo,
        text: carro.descricao,
        imageUrl: carro.foto,
        imageAlt: carro.modelo
      });
}


