//Sum of two lowest positive integers

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//[10, 343445353, 3453445, 3453545353453] should return 3453455.
//Hint: Do not modify the original array.

//Me
function sumTwoSmallestNumbers(numbers){  
  	let min1 = Math.min.apply(Math,numbers);
	let minindex = numbers.indexOf(min1);
	numbers = numbers.filter((value,index) =>index != minindex);
	return min1+Math.min.apply(Math,numbers);

};
//Others
function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};