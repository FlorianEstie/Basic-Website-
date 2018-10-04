//Write a pseudo-code algorithm (a list of steps in comments) that goes through a list of numbers, in reverse,
 //and if the number is greater than 10 it should display a message that says "more is better" and if not it should say "less is more"
 //Break the problem down into as many steps as possible→Begin researching the code behind each of the steps

 // 1: Write a pseudo-code algorithm (a list of steps in comments) that goes through a list of numbers, in reverse

 //Create an array of numbers
var numbers = [1,2,15,21,7,25,6];


//Create a for loop 
for(var i =numbers.length; i>0; i--)


//If greater than 10, display message 'more is better'
// - if statement item > 10 then console.log

if(numbers[i] > 10){
	console.log('more is better')
}


// If not greater than 10, message is 'less is more'

else console.log('less is more'){
	console.log('less is more')
}



//Other option: Reverse array
// numbers = numbers.reverse()