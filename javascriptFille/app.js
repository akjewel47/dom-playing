const allBtn = document.getElementsByClassName(' add-btn');
for (const btn of allBtn) {
 btn.addEventListener('click', function (event) {
  const name = event.target.parentNode.childNodes[1].innerText;
  const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
  const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;

  const selectedContainer = document.getElementById('selected-player-container');
  const div = document.createElement('div');
  div.classList.add('selected-player-container');

  // disabled botton
  event.target.setAttribute('disabled', false)
  event.target.parentNode.style.backgroundColor = '#FFFFFF'




  // check the value 
  const firstCartCount = getConvertedValue('cart');
  if (firstCartCount + 1 > 6) {
   alert('limit finished')
   return;
  }

  const totalBudget = getConvertedValue('budget');
  if (totalBudget < 0) {
   alert('limit finished')
   return;
  }
  const checkLeftCount = getConvertedValue('left');
  if (checkLeftCount < 0) {
   alert('limit finished')
   return;
  }


  // budget update
  const budget = getConvertedValue('budget');
  document.getElementById('budget').innerText = budget - parseInt(price);
  // CartCount update
  const cartCount = getConvertedValue('cart');
  document.getElementById('cart').innerText = cartCount + 1;
  // leftCount update
  const leftCount = getConvertedValue('left');
  document.getElementById('left').innerText = leftCount - 1;

  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  p1.innerText = name;
  p2.innerText = price;
  p3.innerText = category;
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.style.display = 'flex';
  selectedContainer.appendChild(div);

  updateTotalCost(price);
  updateGrandTotalCost()
 })
}





function updateTotalCost(value) {
 const totalCost = getConvertedValue('total-cost')
 const sum = totalCost + parseInt(value);
 document.getElementById('total-cost').innerText = sum;
}

function updateGrandTotalCost(status) {
 const totalCost = getConvertedValue('total-cost')
 if (status == undefined) {
  document.getElementById('grand-total').innerText = totalCost;
 }
 else {
  const couponCode = document.getElementById('coupon-code').value;
  if (couponCode == 'love42') {
   const discountedPrice = totalCost * 0.2;
   document.getElementById('grand-total').innerText = totalCost - discountedPrice;
  }
  else {
   alert('please enter a valid coupon code')
  }
 }


}




function getConvertedValue(id) {
 const IdValue = document.getElementById(id).innerText;
 const ConvertedIdValue = parseInt(IdValue);
 return ConvertedIdValue;
}


