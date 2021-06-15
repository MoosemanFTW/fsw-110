var output = document.createElement('div')
document.body.appendChild(output);
var box = document.querySelector('.red-box')



box.addEventListener('mouseover',function (e){
    var x = e.pageX;
    var y = e.pageY;
    output.textContent = 'X: ' + x + 'Y: ' + y
    
})

