'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Bob = (function () {
  function Bob() {
    _classCallCheck(this, Bob);
  }

  _createClass(Bob, [{
    key: 'hey',
    value: function hey(message) {
      var processedMessage = message.split(' ').join('');

      if (processedMessage === '') {
        return 'Fine. Be that way!';
      } else if (processedMessage === processedMessage.toUpperCase() && processedMessage.toLowerCase() !== processedMessage) {
        return 'Whoa, chill out!';
      } else if (processedMessage.slice(-1) === '?') {
        return 'Sure.';
      } else {
        return 'Whatever.';
      }
    }
  }]);

  return Bob;
})();

exports['default'] = Bob;
module.exports = exports['default'];