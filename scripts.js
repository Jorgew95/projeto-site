/*funçao para barra de pesquisa*/
document.addEventListener("DOMContentLoaded", function() {
    const pesquisaInput = document.getElementById("pesquisa");
    const filmesDiv = document.getElementById("filmes");
    const filmes = filmesDiv.getElementsByClassName("space");

    pesquisaInput.addEventListener("input", function() {
        const pesquisaTermo = pesquisaInput.value.toLowerCase();

        for (let i = 0; i < filmes.length; i++) {
            const filmeNome = filmes[i].getAttribute("nome").toLowerCase();
            if (filmeNome.includes(pesquisaTermo)) {
                filmes[i].style.display = ""; // Mostra o filme
            } else {
                filmes[i].style.display = "none"; // Esconde o filme
            }
        }
    });
});
/*funçao para footer*/
    window.addEventListener("scroll", function() {
        let footer = document.getElementById("footer");
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        let windowHeight = window.innerHeight;
        let documentHeight = document.documentElement.scrollHeight;
    
        // Se o usuário rolar até o final, exibe o rodapé
        if (scrollTop + windowHeight >= documentHeight) {
            footer.style.display = "block";
        } else {
            footer.style.display = "none";
        }
    });