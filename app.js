function init(SeletorFrase, seletorAutor, seletorBtn) {
    // Selecionando elementos do DOM
    const frase = document.querySelector(SeletorFrase);
    const autor = document.querySelector(seletorAutor);
    const btn = document.querySelector(seletorBtn);
    const body = document.querySelector('body');
    const btnCopiar = document.querySelector('.btn-copiar');

    // Tratativa de erro
    if (frase && autor && btn && btnCopiar) {
        // Função Assincrona puxando a frase da API
        async function activeApp() {
            try {
                // Frase API

                // Faz um fetch na url
                const dadosResponse = await (fetch('./phrases.json'));
                // Aguarda o retorno do Fetch e transforma em JSON
                const dadosJSON = await (await dadosResponse).json();
                // Puxando as frases de forma aleatoria
                const aleatorio = dadosJSON[Math.floor(Math.random() * dadosJSON.length)];

                // Insere os dados no DOM
                frase.innerText = aleatorio.quote;
                autor.innerText = aleatorio.artigo;
                return gradientColor();

            } catch (erro) {
                console.log(erro);
            }

        }

        async function gradientColor() {
            // Gradient Colors API

            try {
                // Faz um fetch na url
                const colorsResponse = await (fetch('./colors.json'));
                // Aguarda o retorno do Fetch e transforma em JSON
                const colorsJSON = await (await colorsResponse).json();
                // Puxando as cores de forma aleatoria

                const aleatorioColors = colorsJSON[Math.floor(Math.random() * colorsJSON.length)].color;

                // Adicionado cor ao Body
                body.style.background = aleatorioColors;
            } catch (erro) {
                console.log(erro)
            }


        }

        // Evento do botão
        btn.addEventListener('click', activeApp);

        btnCopiar.addEventListener('click', () => {
            const textoParaCopiar = `"${frase.innerText}" - ${autor.innerText}`;
            navigator.clipboard.writeText(textoParaCopiar)})

        // Ativando a função quando entra no site
        activeApp();
    }


}
// Chamando a função geral para inicar o codigo
init('.frase', '.autor', '.btn-novo');