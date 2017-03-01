export default class Words {
	count(string) {
		return string
						.toLowerCase()
						.trim()
						.split(/[\s]+/)
						.reduce((accumulator, currentWord) => 
							(accumulator[currentWord] = ++accumulator[currentWord] || 1, accumulator), {})
	}
}