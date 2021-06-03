var box = document.querySelector('div')

document.addEventListener('DOMContentLoaded',function(){
     box.style.backgroundColor='black'
});

box.addEventListener('mouseover',function(){
    box.style.backgroundColor='green'
});
box.addEventListener('mouseout',function(){
    box.style.backgroundColor='black'
});
box.addEventListener('mousedown',function(){
    box.style.backgroundColor='yellow'
});
box.addEventListener('mouseup',function(){
    box.style.backgroundColor='blue'
});
box.addEventListener('dblclick',function(){
    box.style.backgroundColor='red'
});
document.addEventListener('scroll',function(){
    box.style.backgroundColor='purple'
});