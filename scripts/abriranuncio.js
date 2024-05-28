function abrirAnuncios(){
    console.log('abrir anuncio');

    var botoes = document.querySelectorAll(".botao"); //Pega todos os botoes dos anuncios
    
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
}



function mostrarCarroCompleto(carro){ //dispara o sweetalert para mostrar o carro em detalhes
    Swal.fire({
        title: carro.modelo,
        text: carro.descricao,
        imageUrl: carro.foto,
        imageAlt: carro.modelo
      });
}


