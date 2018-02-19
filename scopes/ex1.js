'use strict';

var foo = "hello";

function bar() {
  console.log(foo);
  var foo = "bar";
}

function baz(foo) {
  foo = "baz";
  bam = "baz";
}

bar();
baz("one");
