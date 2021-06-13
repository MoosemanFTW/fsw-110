var fn = document.getElementById('fname')
var ln = document.getElementById('lname')
var age = document.getElementById('age')
var q1 = document.getElementsByName('Q1')
var q2 = document.getElementsByName('Q2')
var q3 = document.getElementsByName('Q3')
var submit = document.getElementById('button')



submit.addEventListener('click', function(event){
    event.preventDefault();
    alert('First Name: ' + fn.value + '\n' + 
    'Last Name: ' + ln.value + '\n' +
    'Age: ' + age.value + '\n' +
    'Shopped before: ' + q1.value + '\n' +
    'Recommend us: ' + q2.value + '\n' +
    'Favorite product: ' + q3.value + '\n')
})