'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PhoneNumber = (function () {
	function PhoneNumber(phoneNumber) {
		_classCallCheck(this, PhoneNumber);

		this.phoneNumber = phoneNumber;
		this.cleanedNumber = this.phoneNumber.replace(/\D/g, '');
		this.arrayNumber = this.cleanedNumber.split("");
	}

	_createClass(PhoneNumber, [{
		key: 'number',
		value: function number() {
			if (this.cleanedNumber.length === 11 && this.arrayNumber[0] === '1') {
				this.arrayNumber.splice(0, 1);
				return this.arrayNumber.join("");
			}
			if (this.cleanedNumber.length < 10 || this.cleanedNumber.length > 10 || this.phoneNumber.match(/[a-z]/i)) {
				return null;
			}
			return this.cleanedNumber;
		}
	}]);

	return PhoneNumber;
})();

exports['default'] = PhoneNumber;
module.exports = exports['default'];