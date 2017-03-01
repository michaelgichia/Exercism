"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = isLeapYear;

function isLeapYear(year) {
	if (year % 4 !== 0) {
		return false;
	}
	if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
		return false;
	}return true;
}

module.exports = exports["default"];