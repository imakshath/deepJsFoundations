function foo() {
	console.log(this.bar);
}

var obj1 = { bar: "bar1"};
var obj2 = { bar: "obj2"};

var temp = foo;
foo = function() { temp.call(obj2); }; //hard binding

foo();
foo.call(obj2);