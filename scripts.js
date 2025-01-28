   //funçao para organizar lista em ordem alfabética
   document.addEventListener("DOMContentLoaded", () => {
    const listItems = Array.from(document.querySelectorAll("li"));
    const sortedItems = listItems.sort((a, b) => {
        const textA = a.querySelector("span").textContent.trim().toUpperCase();
        const textB = b.querySelector("span").textContent.trim().toUpperCase();
        return textA.localeCompare(textB);
    });

    const parent = listItems[0].parentNode;
    parent.innerHTML = ""; // Limpa a lista atual
    sortedItems.forEach(item => parent.appendChild(item)); // Reanexa os itens em ordem
    });

    /*funçao para barra de pesquisa*/
    function searchFunction() {
    const input = document.getElementById("searchInput").value.toLowerCase(); // Obtém o valor digitado, em minúsculo
    const listItems = document.querySelectorAll("ul.site-list li"); // Seleciona os itens da lista

    listItems.forEach(item => {
        const spanText = item.querySelector("span").textContent.toLowerCase(); // Obtém o texto do span, em minúsculo
        if (input.length > 0) {
            // Mostra os itens que começam com as letras digitadas
            if (spanText.startsWith(input)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        } else {
            item.style.display = ""; // Exibe todos os itens caso o campo de pesquisa esteja vazio
        }
    });
}