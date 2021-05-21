var newList = document.createElement('ul');
var listItem1 = document.createElement('li');
listItem1.textContent ='item 1';
var listItem2 = document.createElement('li');
listItem2.textContent ='item 2';
var listItem3 = document.createElement('li');
listItem3.textContent ='item 3';

/*var a1 = document.createElement('a');
a1.setAttribute('href="#"');
a1.textContent = 'home'
var a2 = document.createElement('a');

var a3 = document.createElement('a');*/

//newList.listItem1.appendChild(a1)
newList.appendChild(listItem1);
newList.appendChild(listItem2);
newList.appendChild(listItem3);
document.body.appendChild(newList);

var newH1 = document.createElement('h1');
newH1.textContent = 'This is h1';
document.body.appendChild(newH1)

var newP = document.createElement('p');
newP.textContent = 'This is p';
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

var newFooter = document.createElement('footer');
newFooter.textContent = 'This is footer';
document.body.appendChild(newFooter);