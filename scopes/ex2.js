'use strict';

var foo = "bar";

function bar() {
	var foo = "baz";

	function baz(foo) {
		foo ="bam";
		bam = "yay"; //global scope runtime
	}

	baz(); // RHS
}

bar(); // RHS
foo; // "bar" RHS
bam; // will get the value "yay"; from baz function bcs its doesn't have declaration in that scope
// its will declare in global scope and assigned value "yay" at runtime. bad way declaring variable
baz();

