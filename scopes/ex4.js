function foo(){
	var bar = "hello";
	function baz() {
		console.log(bar); //lexical scope
	}
	baz();
}

foo();