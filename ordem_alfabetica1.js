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
