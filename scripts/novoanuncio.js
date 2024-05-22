async function dadosItem() {
  let htmlinterno = `
  <textarea id="nome" class="swal2-textarea" placeholder="Digite o nome do carro" aria-label="Digite o nome do carro"></textarea>
  <br>

  <textarea id="desc" class="swal2-textarea" placeholder="Digite a descrição do carro" aria-label="Digite a descrição do carro"></textarea>
  <br>

  <textarea id="imagem" class="swal2-textarea" placeholder="Digite o local onde está a imagem" aria-label="Digite o local onde está a imagem"></textarea>
  <br>
  `;

  let nome, desc, imagem;

  await Swal.fire({
    title: 'Informações do Carro',
    html: htmlinterno,
    focusConfirm: false,
    preConfirm: () => {
      return {
        nome: document.getElementById('nome').value,
        desc: document.getElementById('desc').value,
        imagem: document.getElementById('imagem').value
      }
    },
    showCancelButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      nome = result.value.nome;
      desc = result.value.desc;
      imagem = result.value.imagem;
      if(nome != "" && desc != "" && imagem != "")
        {
          adicionarItem(nome, desc, imagem);
        }else{
          
            Swal.fire({
              title: "Carro não adicionado",
              text: "Existe informações não preenchidas!",
              icon: "error"
            });
          
        }
    } else if(!result.isConfirmed)
      {
        Swal.fire({
          title: "Carro não adicionado",
          text: "Operação cancelada pelo usuário!",
          icon: "error"
        });
      }
  });
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