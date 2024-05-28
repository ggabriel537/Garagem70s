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
    confirmButtonText: 'Confirmar',
    confirmButtonColor: "#2196f3",
    cancelButtonText: 'Cancelar',
    cancelButtonColor: "#f44336",
    preConfirm: () => {
      return {//pega os dados do html customizado inserido acima
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

      if (![".png", ".jpg"].includes(imagem.substring(imagem.length - 4).toLowerCase())) {//verifica se possui uma imagem valida
        Swal.fire({
          confirmButtonText: 'Confirmar',
          confirmButtonColor: "#2196f3",
          title: "Carro não adicionado",
          text: "Utilize imagens png ou jpg!",
          icon: "error"
        });
      } else if (nome != "" && desc != "" && imagem != "") {
        console.log(nome, desc, imagem);
        salvarItem(nome, desc, imagem); //caso os valores não forem vazios ele salva os dados criados e adiciona o item a lista
        Swal.fire({
          confirmButtonText: 'Confirmar',
          confirmButtonColor: "#2196f3",
          title: "Carro adicionado",
          text: "Seu "+nome+" foi adicionado com sucesso!",
          icon: "success"
        });
      } else { //funcao para mostrar mensagem caso o que for digitado estiver incorreto ou caso usuario clicar em cancelar
        Swal.fire({
          confirmButtonText: 'Confirmar',
          confirmButtonColor: "#2196f3",
          title: "Carro não adicionado",
          text: "Existe informações não preenchidas!",
          icon: "error"
        });

      }
    } else if (!result.isConfirmed) {//se nao for nada acima ele assume que a op foi cancelada pelo usuario
      Swal.fire({
        confirmButtonText: 'Confirmar',
        confirmButtonColor: "#2196f3",
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
