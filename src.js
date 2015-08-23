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