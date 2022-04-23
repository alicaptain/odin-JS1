"use strict";
// 
// 
// 
// 
// 
// const blondManitas = ['ayse', 'fatma', 'aylin', 'figen', 'hatice'];
// const brownManitas = ['selen', 'arzu', 'buket', 'ceren'];
// const redManitas = ['cemre', 'marry', 'hazal', 'bar', 'Asli'];
// const allManitas = blondManitas.concat(brownManitas, redManitas);
// 
// 
// // contacts 
// const contacts = ['Leyla:223322', 'Buse:333435', 'Banu:9090909', 'Defne:0303030', 'Dilek:3838843', 'Nalan:334300939'];
// 
// const paraContact = document.querySelector('.p-contact');
// const inputContact = document.querySelector('.p-input');
// const btnContact = document.querySelector('.p-button');
// 
// if (btnContact !== null) {
// 
//    btnContact.addEventListener('click', () => {
//       const searchName = inputContact.value.toLowerCase();
//       inputContact.value = '';
//       inputContact.focus();
//       paraContact.textContent = '';
// 
//       for (const contact of contacts) {
//          const splitContact = contact.split(':');
//          if (splitContact[0].toLowerCase() === searchName) {
//             paraContact.textContent = splitContact[0] + `'nin numarasi: ` + splitContact[1] + `.`;
//             break;
//          }
// 
//          if (paraContact.textContent === '') {
//             paraContact.textContent = `Sana kontak montak yok.`;
//          }
//       }
// 
//    });
// }
// 
// // integer returner
// const paraNum = document.querySelector('.num-p');
// const inputNum = document.querySelector('.num-input');
// const btnNum = document.querySelector('.num-btn');
// 
// if (inputNum !== null) {
//    btnNum.addEventListener('click', () => {
//       paraNum.textContent = 'Output: ';
//       const num = inputNum.value;
//       inputNum.value = '';
//       inputNum.focus();
// 
//       for (let i = 1; i <= num; i++) {
//          let sqRoot = Math.sqrt(i);
//          if (Math.floor(sqRoot) !== sqRoot) {
//             continue;
//          }
//          paraNum.textContent += `${i} `;
//       }
// 
//    });
// }
// 
// console.log(inputNum);
// 
// 
// // while loop with all ladies
// 
// let esasManitalar = 'These are the manitas I never can give up: ';
// 
// let i = 0;
// 
// while (i < allManitas.length) {
//    if (i === allManitas.length - 1) {
//       esasManitalar += ` and ${allManitas[i]}. `;
//    } else {
//       esasManitalar += `${allManitas[i]}, `;
//    }
// 
//    i++
// }
// 
// console.log(esasManitalar);
// 
// 
// let sahiciManitalar = `Ladies that I'd always adore: `;
// 
// let j = 0;
// 
// do {
//    if (j === allManitas.length - 1) {
//       sahiciManitalar += ` and ${allManitas[j]}. `;
//    } else {
//       sahiciManitalar += `${allManitas[j]}, `;
//    }
// 
//    j = j + 1;
// } while (j < allManitas.length);
// 
// console.log(`\n`);
// console.log(sahiciManitalar);


// countdown to blast 



// const btnCount = document.querySelector('.count-button');
// let output = document.querySelector('.output');
// output.innerHTML = 'Ready to launch!';
// 
// 
// btnCount.addEventListener('click', () => {
//    //initializer
//    let k = 10;
//    output.innerHTML = 'Here we go!';
// 
//    //loop
//    while (k >= 0) {
//       const header = document.createElement('h4');
//       if (k === 10) {
//          header.textContent = `Countdown: ${k}`;
//       } else if (k === 0) {
//          header.textContent = 'Blast Off!';
//       } else {
//          header.textContent = `${k}`;
//       }
// 
//       output.appendChild(header);
//       k--;
// 
//    }
// });


// guest list challenge

// lists
const people = ['Chris', 'Anne', 'Collin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');


// loop here

for (const guest of people) {
   if (guest === 'Phil' || guest === 'Lola') {
      admitted.textContent += `${guest}, `;
   } else {
      refused.textContent += `${guest}, `;

   }
}

refused.textContent = refused.textContent.slice(0, refused.textContent.length - 2) + `.`;
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length - 2) + `.`;


// JAVASCRIPT.INFO loops page study

//while returns boolean?


// 
// for (let i = 0; i < 3; i++) {
//    alert(`number ${i}!`);
// }
// 
// 
// let i = 0;
// 
// while (i < 3) {
//    alert(`number ${i}!`);
//    i++;
// }



// noMore: for (let i;; i++) {
//    let numHundred = +prompt(`Gimme a number bigger than a hundred.`, '');
//    if (!numHundred) {
//       break noMore;
//    } else if (numHundred < 100) {
//       for (let j = 0; j < 2; j++) {
//          if (j == 2) {
//             break noMore;
//          } else {
//             alert('I said saclar no dedim. Yenden gir!');
//             continue noMore;
//          }
//       }
//    }
//    alert('Thank you! But I need more (as always).')
// 
// };


// for (let i = 0; i < 2; i++) {
//    let numHundred = +prompt('Gimme a number bigger than a hundred.', '');
//    if (!numHundred) {
//       alert('No kidding?');
//       break;
//    } else if (numHundred < 100) {
//       alert('I said saclar no dedim. Yenden gir!');
// 
//    }
// }


let numPrime;

primer: for (let numPrime = 2; numPrime < 20; numPrime++) {
   for (let i = 2; i < numPrime; i++) {
      if (numPrime % i !== 0) {
         console.log(`Prime: ${numPrime}`);
      } else {
         break;
      }
   }
};

let n = 10;

nextPrime:
   for (let i = 2; i <= n; i++) { // for each i...

      for (let j = 2; j < i; j++) { // look for a divisor..
         if (i % j == 0) continue nextPrime; // not a prime, go next i
      }

      console.log(i); // a prime
   }