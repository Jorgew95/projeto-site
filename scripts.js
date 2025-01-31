/*funçao para barra de pesquisa*/
    document.getElementById("pesquisa").addEventListener("input", function() {
        let input = this.value.toLowerCase().trim();
        let filmes = document.querySelectorAll(".space");
    
        filmes.forEach(filme => {
            let nomeFilme = filme.querySelector("span").innerText.toLowerCase().trim();
            
            if (nomeFilme.includes(input)) {
                filme.style.display = "block"; // Mostra o filme se corresponder
            } else {
                filme.style.display = "none"; // Esconde se não corresponder
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