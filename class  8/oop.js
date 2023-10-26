class parents {
    constructor(fname) {
        this.fname = fname;

    }
    getFatherInfo() {
        return `your father name is ${this.fname}`
    }
}

class child extends parents {
    constructor(fname, name) {
        super(fname)
        this.name = name;
    }
    getChildInfo() {
        return `${super.getFatherInfo()} your name is ${this.name}`
    }
}

let ch1 = new child("amin", "robi")

console.log(ch1.getChildInfo());