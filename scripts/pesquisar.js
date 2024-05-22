function filtrar(){
    const filtro = document.getElementById('item-pesquisado').value.toUpperCase();
    const lis = document.querySelectorAll('#listacarros li');

    lis.forEach(li => {
        const carros = li.querySelector('.card-title');
        const nomeCarro = carros.textContent.toUpperCase();

        if (nomeCarro.includes(filtro)) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    });
}
