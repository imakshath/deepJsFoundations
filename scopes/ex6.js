var foo = "one";

(function bar(bob) {
	var foo = "two";
	console.log(foo, bob);
})(global);

console.log(foo);
