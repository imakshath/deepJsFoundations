for(var i=1; i< 5; i++) {
	setTimeout(() => {
		console.log("i:", i);
	}, 1000*2);
}

// IIFE
for (var i = 1; i < 5; i++) {
	(function(i) {
		setTimeout(() => {
			console.log("i:", i);
		}, 1000 * 2);
	})(i)
}

// Using let
for (var i = 1; i < 5; i++) {
	{
		let j = i;
		setTimeout(() => {
		console.log("i:", j);
		}, 1000 * 2);
  }
}