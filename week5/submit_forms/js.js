var fn = document.getElementById('fname')
var ln = document.getElementById('lname')
var age = document.getElementById('age')
var q1 = document.Q1
var q2 = document.Q2
var q31 = document.getElementById('p1')
var q32 = document.getElementById('p2')
var q33 = document.getElementById('p3')
var submit = document.getElementById('button')
console.log(q31)




submit.addEventListener('click', function(event){
    event.preventDefault();
    if(q31.checked){
        var checked1 = q31.getAttribute('value')
        
     }
     if(q32.checked){
        var checked2 = q32.getAttribute('value')
        
     }
     if(q33.checked){
        var checked3 = q33.getAttribute('value')
        
     }
    alert('First Name: ' + fn.value + '\n' + 
    'Last Name: ' + ln.value + '\n' +
    'Age: ' + age.value + '\n' +
    'Shopped before: ' + q1.Q1.value + '\n' +
    'Recommend us: ' + q2.Q2.value + '\n' +
    'Favorite product: ' + checked1 + ' ' + checked2 + ' ' + checked3)
})