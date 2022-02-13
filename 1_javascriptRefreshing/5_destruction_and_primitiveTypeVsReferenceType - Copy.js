
//-----------------------------------------------
//           		destruction for arrays
//-----------------------------------------------

const numbers = [1,2,3];

[a,b] = numbers; // this will assign the first 2 elemnt of arr to a and b;
console.log(a + ' ' + b);


//now let's do the same but with first and last one: 
[a, , b] = numbers;
console.log(a + ' ' + b);


//same goes for uninitiated arrays: 
[a,b] = [5,6];
console.log(a + ' ' + b);



//-----------------------------------------------
//           		destruction for objects
//-----------------------------------------------

//same logic with objects: 
// weirdly this is not working, i think it cuz chrome doesn't support es6:
//{name} = {name: 'ammar', age: 28}
//console.log(name);


//----------------------------------------------------
//				primitive type vs reference type
//----------------------------------------------------

//variables is primitive type
const var1 = 7;
const var2 = var1; //this is a separated copy, cuz it's primitve type



//objects and array are reference type:

//when you copy and object, it won't be coppied, it will reference to the old obj: 
const person = { //notice without the = sign it will be a class not object!!
	name : 'ammar'
};


const alien = person;
alien.name = 'eren';
console.log(person.name);

//-----------------------------------------------------------------------------
//			that's why we use the spread, to avoid the reference mistake!!
//-----------------------------------------------------------------------------

const animal = {...person}

animal.name = 'monkey';

console.log(person.name);