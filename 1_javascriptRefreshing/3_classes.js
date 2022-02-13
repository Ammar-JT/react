
//-----------------------------------------------
//           classes
//-----------------------------------------------
/*
class Human {
	constructor(){
		this.gender = 'male';
	}
	
	printGender(){
		console.log(this.gender);
	}
}

//whith extend we inheritent 
class Person extends Human {
	constructor(){
		//with super you can use the gender variable from Human
		//.. without it you can't use what in Human's constructor
		super();
		this.name = 'Max';
		this.gender = 'female';
	}
	
	printMyName(){
		console.log(this.name);
	}
}
*/

//------------------------------------------------------
//				now let's use classes but in es6
//				ES6 works fine with Chrom, i just tried dit now
//------------------------------------------------------


class Human {
	gender = 'male';
	
	printGender = () => {
		console.log(this.gender);
	}
}
class Person extends Human {
		name = 'Max';
		//as you can see here, no need for using constructor + super + overRiding gender
		//.. cuz we are using es6 so js will understand the we overriding the father class gender 
		gender = 'female';
	
	printMyName = () => {
		console.log(this.name);
	}
}

const person = new Person();
person.printMyName();
person.printGender();


