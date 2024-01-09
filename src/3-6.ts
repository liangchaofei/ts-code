class People {
    _age: number;
    constructor() { 
        this._age = 0;
    }

    set age(val: number) {
        this._age = val;
    }

    get age() {
        return this._age
    }
    
}
export {}