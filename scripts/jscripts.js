
function amazonButtonUI() {
  const buttonElement = document.querySelector('.amazon-cart-button');

  if (buttonElement.innerText === 'Add to Cart'){
    buttonElement.innerHTML = 'Remove from cart';
    buttonElement.classList.remove('js-subscribe-button');
  } else {
    buttonElement.innerHTML = 'Add to Cart';
    buttonElement.classList.add('js-subscribe-button');
  }
}

function uberButtonUI(temp) {
  let temp2 = `.${temp}`;

  let chosenButton = document.querySelector(temp2);
  let nowButton = document.querySelector('.uberNowButton');
  let laterButton = document.querySelector('.uberLaterButton');

  if (chosenButton.innerText === 'Request now') {
    nowButton.classList.add('uberBlackButton');
    nowButton.classList.remove('uberGrayButton');
    laterButton.classList.add('uberGrayButton');
    laterButton.classList.remove('uberBlackButton');
  } else {
    nowButton.classList.add('uberGrayButton');
    nowButton.classList.remove('uberBlackButton');
    laterButton.classList.add('uberBlackButton');
    laterButton.classList.remove('uberGrayButton');
  }
}
