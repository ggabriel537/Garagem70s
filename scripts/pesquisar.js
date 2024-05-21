function pesquisar() {
    let pesquisa = document.getElementById('item-pesquisado').value.toUpperCase;
    let items = document.querySelectorAll('#listacarros .collection-item');

    items.forEach(item => {
        let title = item.querySelector('.card-title').textContent.toUpperCase();
        if (title.indexOf(pesquisa) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}