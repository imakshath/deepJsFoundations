'use strict';

function foo() {
	console.log(this.name)
}
var name='myself akshath...';

foo = foo.bind({name: 'akshath'})

function callMe(data, cb) {
	setTimeout(function() {
		console.log('go the data', data);
		cb();
	}, 2000)
}

callMe('bla bla', foo);