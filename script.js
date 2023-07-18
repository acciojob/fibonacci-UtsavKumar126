function fibonacci(num) {
// your code here
	let first=0;
	let second=1;
	if(num<=2){
		return num-1;
	}

	for(let i=3;i<=num;i++){
		let third=first+second;
		first=second;
		second=third;
	}
	return second;
}

module.exports = fibonacci;
