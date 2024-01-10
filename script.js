function findLargest(a, b, c) {
  //your code here

	let max1 = Math.max(a,b);
	let max2 = Math.max(max1,c);

	return max2;
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
