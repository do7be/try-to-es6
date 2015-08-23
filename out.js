// try to allow function

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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

// try to class

var Animal = (function () {
  function Animal(sound) {
    _classCallCheck(this, Animal);

    this.sound = sound;
  }

  _createClass(Animal, [{
    key: 'say',
    value: function say() {
      console.log(this.sound);
    }
  }], [{
    key: 'provoke',
    value: function provoke() {
      console.log('俺は別にあんたが犬に似てるなんて思っちゃいない。ただ犬の方がさ、あんたに似てるもんでね');
    }
  }]);

  return Animal;
})();

var dogu = new Animal('ワン');
dogu.say();

Animal.provoke();
