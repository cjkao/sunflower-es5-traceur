(function() {
  try {
    var f = new Function('"use strict";' + 'class C {' + 'constructor(x) { this.x = x; };' + '["foo"]() { return x => this.x + x; };' + 'bar(args) { return this.foo()(...args); };' + '};' + 'return new C(42).bar([100]);');
    if (f() == 142)
      return;
  } catch (e) {}
  var message = 'This script needs EcmaScript 6 features ' + 'like `class` and `=>`. Please run in a browser with support, ' + 'for example: chrome --js-flags="--harmony"';
  console.error(message);
  alert(message);
})();
