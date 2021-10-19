var
btn = document.querySelector('#btn'),
out = document.querySelector('#out1'),
weight = document.querySelector('#weight'),
vol = document.querySelector('#vol'),
weight = document.querySelector('#weight'),
vol = document.querySelector('#vol');

let
regexConstInt=(/^\d{1,}$/),
regexConstStr=(/^\s*$/);

btn.onclick = function(){
  var price=weight.value,
  kol=vol.value;

   if (!(regexConstInt.test(price)) || !(regexConstInt.test(kol))) {
     if (!(regexConstInt.test(price))&&(regexConstInt.test(kol))) {
       alert("Не верно указана цена товара")
       weight.classList.add("warning");
       weight.focus();
       setTimeout(()=>weight.classList.remove("warning"),5000);
       } else if ((regexConstInt.test(price))&&!(regexConstInt.test(kol))) {
        alert("Не верно указано количество товаров")
        vol.classList.add("warning");
        vol.focus();
        setTimeout(()=>vol.classList.remove("warning"),5000);
     } else if (!(regexConstInt.test(price)) && !(regexConstInt.test(kol))) {
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


const Tovar =document.getElementById('tovar'),
      Kol =document.getElementById('kol'),
      Tovar1 =document.getElementById('tovar1'),
      Tovar2 = document.getElementById('tovar2'),
      Tovar3 = document.getElementById('tovar3'),
      Radios = document.getElementById('radios'),
      Radio1 = document.getElementById('radio1'),
      Radio2 = document.getElementById('radio2'),
      Radio3 = document.getElementById('radio3'),
      Flexs =  document.getElementById('flexs'),
      Flex1 = document.getElementById('flex1'),
      Flex2 = document.getElementById('flex2'),
      Flex3 = document.getElementById('flex3'),
      Out = document.getElementById('out'),
      Inputs = document.querySelectorAll('input');

      var option = document.querySelector('.optionValue');



const RadioTypeName = document.querySelectorAll('input[name="radio"]');
const FlexTypeNameA = document.querySelectorAll('input[name="flexa"]');
const FlexTypeNameB = document.querySelectorAll('input[name="flexb"]');
const FlexTypeNameC = document.querySelectorAll('input[name="flexc"]');




  Tovar.addEventListener('change',()=>{
    if (Tovar.value==1) {
      Radios.setAttribute('hidden', 'hidden');
      Flexs.setAttribute('hidden', 'hidden');
      Radio1.checked=false;
      Radio2.checked=false;
      Radio3.checked=false;
      Flex1.checked=false;
      Flex2.checked=false;
      Flex3.checked=false;
    }
})

  Tovar.addEventListener('change',()=>{
    if (Tovar.value==2) {
      Radio1.removeAttribute('disabled');
      Radio2.removeAttribute('disabled');
      Radio3.removeAttribute('disabled');
      Radios.removeAttribute('hidden');
      Flexs.setAttribute('hidden', 'hidden');
      Flex1.checked=false;
      Flex2.checked=false;
      Flex3.checked=false;
    }
  })
    Tovar.addEventListener('change',()=>{
      if (Tovar.value==3) {
        Radios.setAttribute('hidden', 'hidden');
        Flexs.removeAttribute('hidden');
        Radio1.checked=false;
        Radio2.checked=false;
        Radio3.checked=false;


      }

  })
  function calculate(){
    const formatter = new Intl.NumberFormat('ru');
    if(Tovar.value==1){
        if ((regexConstInt.test(Kol.value)) || (regexConstStr.test(Kol.value))) {
          if (regexConstStr.test(Kol.value)) {
              Out.innerText = 0;
          }
          if(regexConstInt.test(Kol.value)){
            let  TotalPriceTov = 20000*parseInt(Kol.value);
            Out.innerHTML =  formatter.format(TotalPriceTov);
            }
        }else{
          alert('ошибка ввода');
        }

    }

    if(Tovar.value==2){
        if ((regexConstInt.test(Kol.value)) || (regexConstStr.test(Kol.value))) {
          if (regexConstStr.test(Kol.value)) {
              Out.innerText = 0;
          }
      if(regexConstInt.test(Kol.value)){
        let  TotalPriceTov = 30000*parseInt(Kol.value);
        Out.innerHTML =  formatter.format(TotalPriceTov);
        for(const radio of RadioTypeName){
          if (radio.checked) {
            TotalPriceTov = 30000*parseInt(Kol.value)+parseInt(radio.value);
            Out.innerHTML =  formatter.format(TotalPriceTov);
          }
        }
      }
      }
      else{
        alert('ошибка ввода');
      }
    }
      if(Tovar.value==3){
        if ((regexConstInt.test(Kol.value)) || (regexConstStr.test(Kol.value))) {
          if (regexConstStr.test(Kol.value)) {
              Out.innerText = 0;
          }
        if(regexConstInt.test(Kol.value)){
        let  TotalPriceTov = 50000*parseInt(Kol.value);
        Out.innerHTML =  formatter.format(TotalPriceTov);
        for(const flex of FlexTypeNameA){
          if(flex.checked){
            TotalPriceTov= TotalPriceTov+parseInt(flex.value);
            formatter.format(TotalPriceTov);
            Out.innerHTML =  formatter.format(TotalPriceTov);
          }
        }
          for(const flex of FlexTypeNameB){
            if(flex.checked){
              TotalPriceTov= TotalPriceTov+parseInt(flex.value);
              formatter.format(TotalPriceTov);
              Out.innerHTML =  formatter.format(TotalPriceTov);
            }
          }
            for(const flex of FlexTypeNameC){
              if(flex.checked){
                TotalPriceTov= TotalPriceTov +parseInt(flex.value);
                formatter.format(TotalPriceTov);
                Out.innerHTML =  formatter.format(TotalPriceTov);
              }
        }
        }
      }
  }
}
  calculate();
  for(const item of Inputs){

  item.addEventListener('input',()=>{
    calculate();
  })}
  option.onchange = function(){
        calculate();
      }
