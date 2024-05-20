async function dadosItem()
{
    var nome;
    await Swal.fire({
        input: "textarea",
        inputLabel: "Nome",
        inputPlaceholder: "Digite o nome do carro",
        inputAttributes: {
          "aria-label": "Digite o nome do carro"
        },
        showCancelButton: false
        
      }).then(function(result) {
        nome = result.value;
      });
    var desc; 
    await Swal.fire({
        input: "textarea",
        inputLabel: "Descrição",
        inputPlaceholder: "Digite a descrição do carro",
        inputAttributes: {
          "aria-label": "Digite a descrição do carro"
        },
        showCancelButton: false
        
      }).then(function(result) {
        desc = result.value;
      });
      var imagem;
      await Swal.fire({
          input: "textarea",
          inputLabel: "Imagem",
          inputPlaceholder: "Digite o local onde está a imagem",
          inputAttributes: {
            "aria-label": "Digite o local onde está a imagem"
          },
          showCancelButton: false
          
        }).then(function(result) {
          imagem = result.value;
        });
    adicionarItem(nome, desc, imagem);
}

function adicionarItem(nome, descricao, foto) {
    var novoItem = document.createElement("li");
    novoItem.classList.add("collection-item");

    novoItem.innerHTML = `
        <div>
            <div class="row">
                <div class="col s28 m18">
                    <div class="card">
                        <div class="card-image waves-effect waves-teal">
                            <img src="${foto}">
                            <span class="card-title">${nome}</span>
                        </div>
                        <div class="card-content">
                            <p>${descricao}</p>
                        </div>
                        <br><br>
                        <a class="waves-effect waves-teal btn-flat blue botao">Ver mais</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    var lista = document.querySelector("#listacarros");
    lista.appendChild(novoItem);
}