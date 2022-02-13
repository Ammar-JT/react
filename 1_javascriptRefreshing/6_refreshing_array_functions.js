
//-----------------------------------------------
//           		array mapping function
//-----------------------------------------------
const numbers = [1,2,3];

//as you can see, it like foreach function but it will perform your logic
//.. for every element in the old array and out put it in the new array
const doubleNumArray = numbers.map((elmnt) => {
	return elmnt * 2; // our logic here will 
});

console.log(numbers);
console.log(doubleNumArray);

//------------------------------------------------
//					array filter function
//------------------------------------------------

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
