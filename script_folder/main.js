
/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/product_img.jpeg') {
      myImage.setAttribute ('src','images/product_img.jpeg');
    } else {
      myImage.setAttribute ('src','images/index.png');
    }
}*/
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'We welcome you to the world of, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'We welcome you to the world of, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}