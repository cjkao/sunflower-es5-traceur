This is a copy of https://github.com/dart-lang/sample-sunflower, with minor
changes to make it compile against "raw DOM" APIs.

The main sunflower.dart file is used as a regression test. You can find it at
../codegen/sunflower.dart with expected code under ../codegen/expect/sunflower/,
and the output is at ../codegen/expect/sunflower/sunflower.dart.js.



1. dartdevc -o out --server web/sunflower.dart
2. Compile es6 js down to es5 using traceur
3. Replace `Object.defineProperty` to `window.Object.defineProperty`... in core.es5.js
4. Replace rtti.es5.js to ignore `value==0`
    function tagComputed(value, compute) {
      if(value !=0){
      	defineProperty(value, _runtimeType, {get: compute});  
      }
      
    }


5. sunflower.es5.js, using document.querySelector

````
    function querySelector(selector) {
      return document.querySelector(selector);
    } 
````  
  * replace dom.InputElement and dom.CanvasElement to Element 
  * replace dom.CanvasRenderingContext2D to CanvasRenderingContext2D  
6. update out/index.html and copy png , css to out/