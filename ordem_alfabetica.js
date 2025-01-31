window.onload = function() {
    const container = document.getElementById('filmes');
    const filmes = Array.from(container.getElementsByClassName('space'));
    
    filmes.sort((a, b) => {
        const nomeA = a.getAttribute('nome').toLowerCase();
        const nomeB = b.getAttribute('nome').toLowerCase();
        if (nomeA < nomeB) return -1;
        if (nomeA > nomeB) return 1;
        return 0;
    });

    // Limpar o container e adicionar as divs ordenadas
    container.innerHTML = '';
    filmes.forEach(filme => container.appendChild(filme));
};