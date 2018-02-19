var foo = (function() {
	var publicApi = {
		bar: function() {
			publicApi.baz();
		},
		baz: function() {
			console.log('Hello this is baz');
		}
	}
	return publicApi;
})();

var test = (function() {
	var a = { bar: 'bar', id: 1 };
	return {
		fun: function(){
			console.log(a.bar);
		}
	}
})()

foo.bar();
test.fun();