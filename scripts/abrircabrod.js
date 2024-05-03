function loadHTML(containerId, htmlPath) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', htmlPath, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById(containerId).innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

loadHTML('cabecalho', 'cabecalho.html');
loadHTML('rodape', 'rodape.html');