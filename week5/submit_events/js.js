var submit = document.getElementById('button')
var fn = document.getElementById('fname')
var mn = document.getElementById('mname')
var ln = document.getElementById('lname')

submit.addEventListener('click', function(event){
event.preventDefault();
var fullName= fn.value + ' ' + mn.value + ' ' + ln.value
alert(fullName)
fn.value =''
mn.value =''
ln.value =''
})
