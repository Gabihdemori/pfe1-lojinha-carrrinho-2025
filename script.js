fetch('dados.json')
  .then(res => res.json())
  .then(produtos => {
    const lista = document.getElementById('product-list');
    produtos.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'col-md-4';

      card.innerHTML = `
        <div class="card">
          <img src="${prod.imagem}" class="card-img-top" alt="${prod.nome}">
          <div class="card-body">
            <h5 class="card-title">${prod.nome}</h5>
            <p class="card-text">R$ ${prod.preco.toFixed(2)}</p>
            <button class="btn btn-outline-dark" onclick="addToCart('${prod.nome}', ${prod.preco})">Adicionar</button>
          </div>
        </div>
      `;
      lista.appendChild(card);
    });
  });

let total = 0;
function addToCart(nome, preco) {
  const cartList = document.getElementById('cart-list');
  const item = document.createElement('li');
  item.className = 'list-group-item';
  item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
  cartList.appendChild(item);

  total += preco;
  document.getElementById('total-value').textContent = total.toFixed(2);
  document.getElementById('total-checkout').textContent = total.toFixed(2);
  document.getElementById('total-final').textContent = (total + 10).toFixed(2); // frete fixo R$10
}
