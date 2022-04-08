"use strict";

//styling
let r = 100;
let g = 120;
let b = 90;

let rgbBack = `rgb(${r}, ${g}, ${b})`;

document.body.style.backgroundColor = rgbBack;



//WEATHER APPY

const select = document.querySelector('select');
const paragraph = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  switch(choice){
    case 'sunny':
      paragraph.textContent = `Hava bugun cok guzel. Sortunu giy, cik disari. Hatta giyme, sikin tasagin (ya da amin) da guneslensin.`;
      break;
    case 'rainy':
      paragraph.textContent = `Sevgiline cok romantik olacak de, sonra kapidan disari cikinca semsiyeyi almamisim tuh deyip onu yagmurun ortasinda birak. Kapiyi kilitlemeyi ve filmini cekmeyi unutma.`;
      break;

    case 'snowy':
      paragraph.textContent = `Yeliz ile fantazini gerceklestirebilecegin yasi gecmemis olsaydin bile artik bu fantazini onunla yasamak istemeyebilirsin.`;
      break;

    case 'overcast':
      paragraph.textContent = `En guzel hava aslinda bu. Yagmur yagana kadar (belki de yagmaz.) yak bir ates, aba battaniyeyi cek uzerine ve sevgilin olsaydi ne guzel olurdu. Sarabi dik. Evet, o biri olsaydi yarim sise ile bile yanardin, simdi donuyorsun.`;
      break;

    default:
      paragraph.textContent = `De bakayim, ben de sana ayarini vereyim.`;    
  }

}




//Ternary
const changeTheme = document.getElementById('theme');
const html = document.querySelector('html');


function themeChanger(colourBack, colourText) {
  html.style.backgroundColor = 'rgb(222.200.222)';
  html.style.color = 'rbg(100,120,90)';

}



// FUNCTION DECLARATION

function capitalizer(letTheWord) {
  if (letTheWord != 'string') {
    alert('No words luv!');
  };
    
  let lowerCased = letTheWord.toLowerCase();
  const splitted = lowerCased.split(' ');
  return;
}


console.log(capitalizer('lan HATUN, ben senden feci hoSLaniyorum.'));