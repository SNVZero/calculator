var
btn = document.querySelector('#btn'),
out = document.querySelector('#out'),
weight = document.querySelector('#weight'),
vol = document.querySelector('#vol'),
weight = document.querySelector('#weight'),
vol = document.querySelector('#vol'),
regexConst=(/^\d{1,}$/);
  btn.onclick = function(){
var price=weight.value,
kol=vol.value;

 if (!(regexConst.test(price)) || !(regexConst.test(kol))) {
   if (!(regexConst.test(price))&&(regexConst.test(kol))) {
     alert("Не верно указана цена товара")
     weight.classList.add("warning");
     weight.focus();
     setTimeout(()=>weight.classList.remove("warning"),5000);
     } else if ((regexConst.test(price))&&!(regexConst.test(kol))) {
      alert("Не верно указано количество товаров")
      vol.classList.add("warning");
      vol.focus();
      setTimeout(()=>vol.classList.remove("warning"),5000);
   } else if (!(regexConst.test(price)) && !(regexConst.test(kol))) {
    alert("Не верно указана цена и количество товаров")
    vol.classList.add("warning");
    setTimeout(()=>vol.classList.remove("warning"),5000);
    weight.classList.add("warning");
    setTimeout(()=>weight.classList.remove("warning"),5000);
   }
 }
else{
  out.innerHTML = (weight.value*vol.value);
  }
}

document.addEventListener("DOMContentLoaded", ready);