// make the box disapear when the user clicks it
var box = document.querySelector('.red-box')

console.log(box)

box.addEventListener('click',function(e){
    e.preventDefault();
    box.style.display = 'none'
})