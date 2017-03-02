export default class Anagram {
	constructor(string) {
		this.originalString = string;
		this.string = string.toLowerCase().split("").sort().join("");
	}
	matches(anagrams) {
		const newArray = []
		if(Array.isArray(anagrams)) {
			const sortedAnagram = anagrams.map(anagram => 
				Object.assign(
					{},
					{original: anagram},
					{alphabetic: anagram.toLowerCase().split("").sort().join("")}
				)
			)
			sortedAnagram.filter(a => {
			  if(this.string === a.alphabetic && this.originalString !== a.original.toLowerCase()) {
			    newArray.push(a.original)
			  }
			})
			return newArray;
		}
		if(typeof anagrams === "string" && anagrams.toLowerCase().split("").sort().join("") === this.string) {
			newArray.push(anagrams);
			return newArray;
		}
	}
}
