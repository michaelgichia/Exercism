export default class Transcriptor {
	toRna(string){
		const newObject = {G: `C`, C: `G`, T: `A`, A: `U`}
		const stringArray = string.split('')
		let rna = stringArray.map(str => {
			if (newObject[str] === undefined) {
				throw new Error('Invalid input DNA.')
			}
			return newObject[str]
		})
		return rna.join('')
	}
}
