var cont = 0;

async function dadosItem() {
  let htmlinterno = `
  <textarea id="nome" class="swal2-textarea" placeholder="Digite o nome do carro" aria-label="Digite o nome do carro"></textarea>
  <br>

  <textarea id="desc" class="swal2-textarea" placeholder="Digite a descrição do carro" aria-label="Digite a descrição do carro"></textarea>
  <br>

  <textarea id="imagem" class="swal2-textarea" placeholder="Digite o local onde está a imagem" aria-label="Digite o local onde está a imagem"></textarea>
  <br>
  `; //html de base para as text area

  let nome, desc, imagem;

  //mensagem do sweetalert
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
    if (result.isConfirmed) { //atribui os valores digitados as variaveis correspondentes
      nome = result.value.nome;
      desc = result.value.desc;
      imagem = result.value.imagem;
      if(nome != "" && desc != "" && imagem != "")
        {
          salvarItem(nome, desc, imagem); //caso os valores não forem vazios ele salva os dados criados e adiciona o item a lista
          adicionarItem(nome, desc, imagem);
        }else{ //funcao para mostrar mensagem caso o que for digitado estiver incorreto ou caso usuario clicar em cancelar
          
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

function salvarItem(nome, descricao, foto) {
  var itemsSalvos = JSON.parse(sessionStorage.getItem('itensSalvos')) || []; //pega os itens atuais salvos na sessionstorage
  var novoItem = {
      nome: nome,
      descricao: descricao,
      foto: foto
  };
  itemsSalvos.push(novoItem); 
  sessionStorage.setItem('itensSalvos', JSON.stringify(itemsSalvos)); //salva novo item na session storage
}
