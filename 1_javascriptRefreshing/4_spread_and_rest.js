
//-----------------------------------------------
//           		Spread operator
//-----------------------------------------------

//spread for array:
const oldArray = [1,2,3];
const newArray = [...oldArray, 4,5];
console.log(newArray);

//spread for object:
const oldObject = {prob1:1, prob2:2};
const newObject = {...oldObject, prob3:3, prob4:4};

console.log(newObject.prob1 + ',' + newObject.prob2 + ',' + newObject.prob3 + ',' + newObject.prob4);

//-----------------------------------------------
//           		Rest operator
//-----------------------------------------------

const filter = (...args) => { //<< this is the rest operator... receive the args no matter how the size is
	// this is syntax, you already understand it by context
	return args.filter(el => el === 1); //for every element, return if el equal to 1 (return will be in array cuz maaybe there is more than one return);
}
console.log(filter(1,2,3));
