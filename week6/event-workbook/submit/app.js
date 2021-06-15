// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
var submit = document.querySelector('button')
var fname = document.getElementById('name')
var age = document.getElementById('age')

age.setAttribute('type','number')
fname.setAttribute('name', 'user_name')
fname.setAttribute('id','first-name')
console.log(fname)

submit.addEventListener('click',function(e){
    e.preventDefault();
})

