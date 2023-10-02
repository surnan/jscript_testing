
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
  let nowButton = document.querySelector('.uber-button-now');
  let laterButton = document.querySelector('.uber-button-later');

  console.log('cc', typeof (laterButton.style.backgroundColor));

  if (nowButton.style.backgroundColor === '.black') {
    console.log('triggered by black');
  } else {
    console.log('triggered by gray');
  }
}




/*

  // console.log('temp =', temp);


  // if (temp.style.backgroundColor === 'black') {
  //   console.log('black found');
  // } else {
  //   console.log('gray found');
  // }

  // nowButton.style.backgroundColor = 'orange';
  // laterButton.style.backgroundColor = 'blue';
  // chosenButton.style.backgroundColor = 'purple';

  // console.log('currently = ', chosenButton.style.backgroundColor);
  // console.log('currently = ', nowButton.style.backgroundColor);
  // console.log('currently = ', laterButton.style.backgroundColor);



  // console.log(chosenButton);
  // console.log('nowButton', nowButton);
  // console.log('laterButton', laterButton);
  // console.log('=============');
*/
