window.onload = function(){
    carregarCarros();
}

var cont;

function adicionarItem(nome, descricao, foto) {
    var novoItem = document.createElement("li"); //cria novo item da lista para armazenar os carros
    novoItem.classList.add("collection-item"); //adiciona a classe de collection item ao item da lista 
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
      `; //pega todo o codigo html do carro e preenche com os dados do usuario
    var lista = document.querySelector("#listacarros");
    lista.appendChild(novoItem); //adiciona o carro a lista
}

function carregarCarros() {
    var itemsSalvos = JSON.parse(sessionStorage.getItem('itensSalvos')) || []; //Pega o array do sessionstorage onde está guardado os dados dos carros
    itemsSalvos.forEach(function(item) {
        adicionarItem(item.nome, item.descricao, item.foto);
    });
}
