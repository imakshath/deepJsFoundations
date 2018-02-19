'use strict';

var foo = "hello";

try {
	foo.length;
}
catch(err) {
	console.log(err);
}

// console.log(err);

var bar = function baz() {
	var baz = "hello";
	console.log(baz);
}

bar();
// baz();