var btn = document.querySelector('#btn'),
out = document.querySelector('#out'),
weight = document.querySelector('#weight'),
vol = document.querySelector('#vol'),
weight = document.querySelector('#weight'),
vol = document.querySelector('#vol');


  btn.onclick = function(){

    if (weight.value != '' && vol.value != '') {
var sum = (weight.value *vol.value );
if (isNaN(sum)) {
  alert('Введите числовое значение');
}else{
  out.innerHTML = sum;
  }

    }else{
  alert('Введите цену товари и количество');
}

}

document.addEventListener("DOMContentLoaded", ready);