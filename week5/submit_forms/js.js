var fn = document.getElementById('fname')
var ln = document.getElementById('lname')
var age = document.getElementById('age')
var q1 = document.Q1
var q2 = document.Q2
var q3 = document.Q3.checked
var submit = document.getElementById('button')



submit.addEventListener('click', function(event){
    event.preventDefault();
    alert('First Name: ' + fn.value + '\n' + 
    'Last Name: ' + ln.value + '\n' +
    'Age: ' + age.value + '\n' +
    'Shopped before: ' + q1.Q1.value + '\n' +
    'Recommend us: ' + q2.Q2.value + '\n' +
    'Favorite product: ' + q3.Q3.value + '\n')
})