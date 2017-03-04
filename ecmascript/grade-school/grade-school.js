export default class School {
	constructor() {
		this.expectedDb = {}
	}

	add(name, grade) {
		return !this.expectedDb[grade] ? 
		this.expectedDb[grade] = [name] : 
		this.expectedDb[grade] = [...this.expectedDb[grade], name].sort()
	}

  grade(grade) {
    return !this.expectedDb[grade] ?
    [] :
    [ ...this.expectedDb[grade] ]
  }

  roster() {
    return Object.keys(this.expectedDb).reduce((accumulator, value) => {
      accumulator[value] = [ ...this.expectedDb[value] ]
      return accumulator
    }, {})
  }
}

