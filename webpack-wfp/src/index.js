// import util1 from './util1'
// import {fn1,fn2} from './util2'

// console.log(util1.a)
// fn1()
// fn2()

// [1,2,3].map(item=>item + 1)

class MathHandle{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    add(){
        return this.x + this.y
    }
}

const m = new MathHandle(1,2)
// console.log(m.add())

console.log(typeof MathHandle)  //function
console.log(MathHandle.prototype.constructor === MathHandle)   //true
console.log(m.__proto__ === MathHandle.prototype)   //true