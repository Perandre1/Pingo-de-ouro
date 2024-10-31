function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar login (aqui seria implementado o backend para verificar o login real)
    if (username && password) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('main-menu').style.display = 'block';
    }

    return false;
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function showCart() {
    document.getElementById('carrinho').style.display = 'block';
    document.getElementById('cardapio').style.display = 'none';
    let itens = '';
    let total = 0;
    carrinho.forEach(item => {
        itens += `<p>${item.produto} - R$${item.preco.toFixed(2)}</p>`;
        total += item.preco;
    });
    itens += `<p>Total: R$${total.toFixed(2)}</p>`;
    document.getElementById('itens-carrinho').innerHTML = itens;
}

let carrinho = [];

function addToCart(produto, preco) {
    carrinho.push({ produto, preco });
    alert(`${produto} adicionado ao carrinho!`);
}

function comprarMais() {
    document.getElementById('carrinho').style.display = 'none';
    document.getElementById('cardapio').style.display = 'block';
}

function finalizarCompra() {
    alert('Compra finalizada! Obrigado pela preferência.');
    carrinho = [];
    showCart();
}
