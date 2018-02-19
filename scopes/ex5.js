function foo() {
	console.log(bar);
}

function baz() {
	var bar = "hello";
	foo();
}

baz();