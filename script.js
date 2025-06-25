let caixa = document.querySelector('.caixa');

function abrirImagem(numero){

    let url = `imagem.html?imagem=imagem${numero}.jpg&descricao=${numero}`;

    window.open(url, '_blank');
}