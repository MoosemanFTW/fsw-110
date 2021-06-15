/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */
var output = document.getElementById('output')
var output2 = document.createElement('div')
document.body.appendChild(output2)
document.addEventListener('keydown',function(e){
    output.textContent = e.key 
    output2.textContent = e.code
})