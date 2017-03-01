"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BeerSong = (function () {
	function BeerSong() {
		_classCallCheck(this, BeerSong);

		this.oneBottle = "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
		this.zeroBottle = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
	}

	_createClass(BeerSong, [{
		key: "verse",
		value: function verse(number) {
			if (number === 0) {
				return this.zeroBottle;
			}
			if (number === 1) {
				return this.oneBottle;
			}
			return number + " bottles of beer on the wall, " + number + " bottles of beer.  Take one down and pass it around, " + (number - 1) + " bottles of beer on the wall.";
		}
	}, {
		key: "sing",
		value: function sing() {
			var secondNumber = arguments.length <= 0 || arguments[0] === undefined ? 99 : arguments[0];
			var firstNumber = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

			return [].concat(_toConsumableArray(Array(secondNumber - firstNumber + 1))).map(function (_, index) {
				if (secondNumber - index < 1) {
					return "No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall. \n";
				}
				return secondNumber - index + " bottles of beer on the wall, " + (secondNumber - index) + " bottles of beer. \nTake one down and pass it around, " + (secondNumber - index - 1) + " bottles of beer on the wall.\n\n";
			}).join("");
		}
	}]);

	return BeerSong;
})();

var Beer = new BeerSong();
exports["default"] = Beer;
module.exports = exports["default"];