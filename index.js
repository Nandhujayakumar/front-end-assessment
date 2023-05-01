
  document.addEventListener('DOMContentLoaded', () => {

  const brandList = document.querySelector('.brand-list');
  fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    const smartphones = data.products.filter(product => product.category === 'smartphones').slice(0, 5);

    smartphones.forEach(smartphone => {
      const brandItem = document.createElement('div');
      brandItem.classList.add('brand-item');

      const brandImage = document.createElement('img');
      brandImage.src = smartphone.thumbnail;
      brandImage.alt = smartphone.title;
      brandImage.classList.add('brand-image');

      const brandName = document.createElement('p');
      brandName.textContent = smartphone.brand;
      brandName.classList.add('brand-name');

      brandItem.appendChild(brandImage);
      brandItem.appendChild(brandName);

      document.getElementById('brands').appendChild(brandItem);
    });
  })
  .catch(error => {
    console.error('Error fetching API data:', error);
  });


//categories


  const categoriesList = document.querySelector('.categories-list');
  fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    const categories = [];

    data.products.forEach(product => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);

        const categoryItem = document.createElement('div');
        categoryItem.classList.add('category-item');

        const categoryImage = document.createElement('img');
        categoryImage.src = product.thumbnail;
        categoryImage.alt = product.category;
        categoryImage.classList.add('category-image');

        const categoryName = document.createElement('p');
        categoryName.textContent = product.category;
        categoryName.classList.add('category-name');

        categoryItem.appendChild(categoryImage);
        categoryItem.appendChild(categoryName);

        categoriesList.appendChild(categoryItem);
      }
    });
  })
  .catch(error => {
    console.error('Error fetching API data:', error);
  });



//featured producta

  const productList = document.querySelector('.product-list');

  fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
      const products = data.products.slice(6, 11);

      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.src = product.thumbnail;
        productImage.alt = product.title;
        productImage.classList.add('product-image');

        const productName = document.createElement('p');
        productName.textContent = product.title;
        productName.classList.add('product-name');

        const productDiscountedPrice = document.createElement('p');
        productDiscountedPrice.textContent = `$${product.price }`;
        productDiscountedPrice.classList.add('product-discounted-price');

        const productRating = document.createElement('p');
        productRating.textContent = `Rating: ${product.rating}/5`;
        productRating.classList.add('product-rating');

        const productActualPrice = document.createElement('p');
        productActualPrice.textContent = `$${product.price + product.discountPercentage/100}`;
        productActualPrice.classList.add('product-actual-price');

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy Now';
        buyButton.classList.add('buy-button');

        const likeButton = document.createElement('button');
        likeButton.innerHTML = '&hearts;';
        likeButton.classList.add('like-button');
        likeButton.addEventListener('click', () => {
          likeButton.classList.toggle('liked');
        });
        
        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productDiscountedPrice);
        productCard.appendChild(productActualPrice);
        productCard.appendChild(productRating);
        productCard.appendChild(buyButton);
        productCard.appendChild(likeButton);

        productList.appendChild(productCard);
      });
    })
    .catch(error => {
      console.error('Error fetching API data:', error);
    });






    //smartphones

  const proList = document.querySelector('.pro-list');

  fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
      const products = data.products.slice(0, 5);

      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.src = product.thumbnail;
        productImage.alt = product.title;
        productImage.classList.add('product-image');

        const productName = document.createElement('p');
        productName.textContent = product.title;
        productName.classList.add('product-name');

        const productDiscountedPrice = document.createElement('p');
        productDiscountedPrice.textContent = `$${product.price }`;
        productDiscountedPrice.classList.add('product-discounted-price');

        const productActualPrice = document.createElement('p');
        productActualPrice.textContent = `$${product.price + product.discountPercentage/100}`;
        productActualPrice.classList.add('product-actual-price');

        const productRating = document.createElement('p');
        productRating.textContent = `Rating: ${product.rating}/5`;
        productRating.classList.add('product-rating');
       

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy Now';
        buyButton.classList.add('buy-button');

        const likeButton = document.createElement('button');
        likeButton.innerHTML = '&hearts;';
        likeButton.classList.add('like-button');
        likeButton.addEventListener('click', () => {
          likeButton.classList.toggle('liked');
        });

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productDiscountedPrice);
        productCard.appendChild(productActualPrice);
        productCard.appendChild(productRating);
        productCard.appendChild(buyButton);
        productCard.appendChild(likeButton);

        proList.appendChild(productCard);
      });
    })
    .catch(error => {
      console.error('Error fetching API data:', error);
    });

  });