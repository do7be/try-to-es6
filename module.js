'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var default_gun_name = 'サイコガン';

exports.default_gun_name = default_gun_name;

var Gun = (function () {
  function Gun() {
    _classCallCheck(this, Gun);
  }

  _createClass(Gun, null, [{
    key: 'serif',
    value: function serif(name) {
      console.log(name + 'は心で撃つもんなんだぜ');
    }
  }]);

  return Gun;
})();

exports.Gun = Gun;
