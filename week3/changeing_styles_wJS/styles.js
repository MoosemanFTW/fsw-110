var newList = document.createElement('ul');
newList.setAttribute('id','h2')
for (i = 0; i < 5; i++){
    var newh2 = document.createElement('h2')
    newh2.textContent = 'Hello World'
    newh2.style.color='cornflowerblue'
    newh2.style.fontSize='20px'
    newh2.style.fontWeight='lighter'
    newh2.style.fontFamily='sans-serif'
    
    newList.appendChild(newh2)
};
document.body.appendChild(newList)
var H2 = document.getElementById('h2')
H2.classList.add('border')
console.log(H2)