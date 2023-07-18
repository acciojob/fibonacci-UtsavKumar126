function fibonacci(num) {
// your code here
	let first=0;
	let second=1;
	let third=0

	for(let i=2;i<=num;i++){
		third=first+second;
		first=second;
		second=third;
	}
	return third;
}

module.exports = fibonacci;
