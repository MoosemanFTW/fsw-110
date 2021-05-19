var newH1 = document.createElement('h1');
newH1.textContent = 'Welcome to my JS site';
document.body.appendChild(newH1)

var newP = document.createElement('p');
newP.textContent = 'All of this was created with Javascript';
document.body.appendChild(newP)

var newList = document.createElement('ol');
var listItem1 = document.createElement('li');
listItem1.textContent ='item 1';
var listItem2 = document.createElement('li');
listItem2.textContent ='item 2';
var listItem3 = document.createElement('li');
listItem3.textContent ='item 3';

newList.appendChild(listItem1);
newList.appendChild(listItem2);
newList.appendChild(listItem3);
document.body.appendChild(newList);