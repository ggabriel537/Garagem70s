function loadHTML(containerId, htmlPath) { /*Função para preencher o cabeçalho e rodape da pagina */
    var xhr = new XMLHttpRequest(); //objeto para requisicao do arquivo
    xhr.open('GET', htmlPath, true); //abertura do arquivo
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById(containerId).innerHTML = xhr.responseText; //Le o arquivo
        }
    };
    xhr.send(); //integra a estrutura html onde for chamado
}

//Por padrão ele chama os arquivos de cabecalho e rodape para serem integrados
loadHTML('cabecalho', 'cabecalho.html');
loadHTML('rodape', 'rodape.html');