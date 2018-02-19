foo("Hello:...");
//.....................FUNCTION DECLARATIONS.....................//
function foo(str) {
	{ 
		let prefix, rest;
		prefix = 'vc';
		rest = str.slice(':');
		str = prefix.toUpperCase() + rest;
	}

	console.log(str);
}

