const productCards = document.querySelector('#product-cards');

function createProductCard(option) {
    let productCard = document.createElement('div');
    let productImages = document.createElement('img');
    let productName = document.createElement('div');
    let productPrice = document.createElement('div');
    productCard.id = option.id;
    productCard.className = 'product-card';
    productImages.src = option.imageURL;
    productImages.className = 'card-images';
    productName.innerText = option.name;
    productPrice.innerText = `Цена: ${option.price}`;
    productCards.append(productImages, productName, productPrice);
    productCards.append(productCard);
}

createProductCard({
    id: 1,
    name: "Iphone 13 Pro Max",
    imageURL: "https://istore.kg/media/products/iphone-13-pro-max-green-select.webp",
    price: 100250
})

createProductCard({
    id: 2,
    name: "Iphone 13 pro",
    imageURL: "https://istore.kg/media/products/iphone-13-pro-blue-select.webp",
    price: 97000
})