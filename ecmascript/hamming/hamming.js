export default class Hamming {
	compute(stringOne, stringTwo){
		let count = 0;

		if(stringOne.length !== stringTwo.length) {
			throw Error('DNA strands must be of equal length.')
		}
		for(let i in stringOne) {
			if(stringOne[i] !== stringTwo[i]) {count++}
		}
		return count
	}
}
