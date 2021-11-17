const myButton =  document.querySelector('button');
const myImage = document.querySelector('.image');
const srcs = ['img/pilt1.jpg','img/pilt2.jpg','img/pilt3.jpg'];

myButton.addEventListener('click', changeImage);


var lastSrc = '';
var lastIndex = -1;
var tempSrcs = [].concat(srcs);

function changeImage()
{

    tempSrcs.splice(tempSrcs.indexOf(lastSrc), 1);
    let rnd = Math.floor(Math.random() * tempSrcs.length);
    lastSrc = tempSrcs[rnd];
    myImage.setAttribute('src', tempSrcs[rnd]);
    tempSrcs = [].concat(srcs);

}




