function criadorDeCard (titulo, descricao) {
    const retorno = `<div class='card' >
                        <img class="card-img-top" src="https://picsum.photos/id/237/200/300" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${titulo}</h5>
                            <p class="card-text">${descricao}.</p>
                            <a href="#" class="btn btn-primary">Adicionar ao Carrinho</a>
                        </div>
                    </div>`
    return retorno 
}

const carregarDados = () => {
    const container = document.getElementById('container')
    fetch('http://localhost:8080/products')
    .then(result => result.json())
    .then(dados => {
        dados.forEach(produto => {
            container.innerHTML = container.innerHTML + criadorDeCard(produto.title, produto.description)
        });
    })
}