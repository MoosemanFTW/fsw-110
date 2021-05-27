for (i = 0; i < 10; i++){
    var newh1 = document.createElement('h1')
    newh1.textContent = 'Hello World'
    newh1.style.color='blue'
    document.body.appendChild(newh1)
};

const names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily'];

var newList = document.createElement('ul');


for (i=0; i<names.length; i++) {
    var newLi = document.createElement('li')
    newLi.textContent = names[i]
    newList.appendChild(newLi)
};
document.body.appendChild(newList);