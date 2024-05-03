function enviarForm(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("item-pesquisado").submit();
    }
}