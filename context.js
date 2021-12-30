///////////////////////////////////////////
// Example 1
// Keyword function


const sayHello = function () {
	console.log(`Hi, ${this.name}`);
}

// Defining person object which has 2 properties
const person = {
	name: 'Sally',
	// name and greet having the value of the function which is defined on line 6 
	greet: sayHello
};

// If we call function sayHello, we get “Hi, undefined”.
sayHello();
// In this case the function is being called on the person object and so has the context of the person object.
person.greet();


///////////////////////////////////////////
// Arrow function

const sayHello = () => {
	console.log(`Hi, ${this.name}`);
}

const person = {
	name: 'Sally',
	greet: sayHello
};

sayHello();
person.greet();

// Both returns 'Hi, undefined'


///////////////////////////////////////////
// Example 2
// Keyword function


document.addEventListener('DOMContextLoaded', () => {
	const button = document.querySelector('button');
	// Adding the behavior to the button. Where listening out for the 'click' event, and passing the callback to execute once the button is clicked.
	// The callback is declared using the function keyword. So this type of function uses Execution Context.
	button.addEventListener('click', function () {
		// This is callback. We are logging out “this”, as we want to know what is the context of the callback is.
		console.log('this: ', this);
	});
});

///////////////////////////////////////////
// Arrow function

document.addEventListener('DOMContextLoaded', () => {
	
	const button = document.querySelector('button');
	// Changed to arrow function, in the browser's console we will see that the context is the window
	button.addEventListener('click', () => {
		console.log('this: ', this);
	});

});