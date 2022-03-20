"use strict";




let whoSThere = prompt(`Who's there??`);

function passWordCheck(passWord) {
  if (passWord != 'TheMaster') {
    alert('Wrong password!');
  } else {
    alert('Welcome!');
  }
}


if (whoSThere === 'Admin') {
  const passWord = prompt(`What's the password?`);
  passWordCheck(passWord);
} else if (whoSThere === '') {
  alert('Cancelled')
} else {
  alert(`I don't know you.`)
};