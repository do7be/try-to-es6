// try to allow function

var add = (a, b) => {
  return a + b;
};

console.log(add(1,2));


// try to allow function 2

var square = n => n * n;

console.log(square(3));


// try to allow function and let

(() => {
  let name = 'コブラ';

  if (true) {
    let name = 'ジョー・ギリアン';
    console.log(name); // 'ジョー・ギリアン'
  }
  console.log(name); // 'コブラ'
})();


// try to allow function 'this'

var printName = {
  name  : 'コブラ',
  print : function() {
    // 即時関数
    (() => {
      let name = 'ジョー・ギリアン';
      console.log(name);      // 'ジョー・ギリアン'
      console.log(this.name); // 'コブラ'
    })();
  }
}

printName.print();


// try to class

class Animal {
  constructor(sound) {
    this.sound = sound;
  }

  say() {
    console.log(this.sound);
  }

  static provoke() {
    console.log('俺は別にあんたが犬に似てるなんて思っちゃいない。ただ犬の方がさ、あんたに似てるもんでね');
  }
}

let dogu = new Animal('ワン');
dogu.say();

Animal.provoke()

// new なしだとエラー
// let dogu2 = Animal('ワン');


// try to module and template

import * as module from './module';
module.Gun.serif(module.default_gun_name);