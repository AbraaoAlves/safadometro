var sum = (val:number):number => val>1 ? val + sum(val - 1) : 1;

export class Safadao {
	day:number;
	month:number;
	year:number;

	constructor(day:number, month:number, year:number) {
		this.day = day;
		this.month = month;
		this.year = year;
	}

	safadeza():string {
		return `${this._angel().toFixed(1)}% anjo, perfeito ` +
			   `mas aquele ${this._naughty().toFixed(1)}% é vagabundo!`;
	}

	private _naughty():number {
		return sum(this.month) + (this.year / 100) * (50 - this.day);
	}

  private _angel():number { return 100 - this._naughty(); }
}
