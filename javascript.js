"use strict";





const blondManitas = ['ayse', 'fatma', 'aylin', 'figen', 'hatice'];

const brownManitas = ['selen', 'arzu', 'buket', 'ceren'];

const redManitas = ['cemre', 'marry', 'hazal', 'bar', 'Asli'];

const allManitas = blondManitas.concat(brownManitas, redManitas);


// contacts 

const contacts = ['Leyla:223322', 'Buse:333435', 'Banu:9090909', 'Defne:0303030', 'Dilek:3838843', 'Nalan:334300939'];

const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
   const searchName = input.value.toLowerCase();
   input.value = '';
   input.focus();
   para.textContent = '';

   for (const contact of contacts) {
      const splitContact = contact.split(':');
      if (splitContact[0].toLowerCase() === searchName) {
         para.textContent = splitContact[0] + `'nin numarasi: ` + splitContact[1] + `.`;
         break;
      }

      if (para.textContent ==='') {
         para.textContent = `Sana kontak montak yok.`;
      }
   }

});


