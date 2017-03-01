export default class PhoneNumber {
	constructor(phoneNumber) {
		this.phoneNumber = phoneNumber;
		this.cleanedNumber = this.phoneNumber.replace(/\D/g,'');
		this.arrayNumber = this.cleanedNumber.split("");
	}
	number() {
		if(this.cleanedNumber.length === 11 && this.arrayNumber[0] === '1') {
			this.arrayNumber.splice(0, 1);
			return this.arrayNumber.join("");
		}
		if(this.cleanedNumber.length < 10 || this.cleanedNumber.length > 10 || this.phoneNumber.match(/[a-z]/i)) {
			return null;
		}
		return this.cleanedNumber;
	}
}