'use strict'
function MyArray(){
	this.length = 0;
	for (let index = 0; index < arguments.length; index++) {
		this[index] = arguments[index];
		this.length++;
	}
}

MyArray.prototype = new MyArrayPrototype();

function MyArrayPrototype() {
	//push
	this.push = function push() {
		if (arguments) {
			for (let index = 0; index < arguments.length; index++) {
				this[this.length++] = arguments[index];
			}
			return this.length;
		}
	}
	//every
	this.every = function every(fn){
		if (typeof fn !== 'function') {
			throw new Error (fn + 'is not a function');
		}
		for (let index = 0; index < this.length; index++) {
			if (this[index]) {
				if (!fn(this[index], index, this)) return false;
			}
		}
		return true;
	}
}

const myArr = new MyArray(1, 2, 3, 4, 5, 6, 7, 8);
console.log(myArr.every(element => element % 2 === 0)); //false

const myArr1 = new MyArray(2, 4, 6, 8);
console.log(myArr1.every(element => element % 2 === 0)); //true