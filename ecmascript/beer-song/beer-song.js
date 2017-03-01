class BeerSong {
	constructor() {
  	this.oneBottle = `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`;
    this.zeroBottle = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`;
	}

	verse(number) {
		if(number === 0) { return this.zeroBottle; }
		if(number === 1) { return this.oneBottle; }
		return `${number} bottles of beer on the wall, ${number} bottles of beer. Take one down and pass it around, ${number - 1} bottles of beer on the wall.`; 
	}

	sing(secondNumber=99, firstNumber=0) {
		return ([...Array((secondNumber - firstNumber) + 1)].map((_, index) => {
			if((secondNumber - index) < 1) {
				return(`No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall. \n`)
			}
			return(`${secondNumber - index} bottles of beer on the wall, ${secondNumber - index} bottles of beer. \nTake one down and pass it around, ${secondNumber - index - 1} bottles of beer on the wall.\n\n`);
		})).join("")
	}
}

const Beer = new BeerSong;
export default Beer;
