// try to allow function

'use strict';

var add = function add(a, b) {
  return a + b;
};

console.log(add(1, 2));

// try to allow function 2

var square = function square(n) {
  return n * n;
};

console.log(square(3));

// try to allow function and let

(function () {
  var name = 'コブラ';

  if (true) {
    var _name = 'ジョー・ギリアン';
    console.log(_name); // 'ジョー・ギリアン'
  }
  console.log(name); // 'コブラ'
})();

// try to allow function 'this'

var printName = {
  name: 'コブラ',
  print: function print() {
    var _this = this;

    // 即時関数
    (function () {
      var name = 'ジョー・ギリアン';
      console.log(name); // 'ジョー・ギリアン'
      console.log(_this.name); // 'コブラ'
    })();
  }
};

printName.print();
