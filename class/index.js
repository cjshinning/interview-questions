// function MathHandle(x,y){
//     this.x = x
//     this.y = y
// }

// MathHandle.prototype.add = function(){
//     return this.x + this.y
// }

// var m = new MathHandle(1, 2)
// // console.log(m.add())

// console.log(typeof MathHandle)  //function
// console.log(MathHandle.prototype.constructor === MathHandle)   //true
// console.log(m.__proto__ === MathHandle.prototype)   //true

// 动物
// function Animal(){
//     this.eat = function(){
//         console.log('Animal eat')
//     }
// }

// 狗
// function Dog(){
//     this.bark = function(){
//         console.log('Dog bark')
//     }
// }

// 继承
// Dog.prototype = new Animal();

// var hashiqi = new Dog()
// hashiqi.eat()   //Animal eat
// hashiqi.bark()  //Dog bark

function fn(){
    console.log('real', this)

    var arr = [1, 2, 3]
    arr.map(function(item){
        console.log(this)
    })
}

fn.call({a: 100})

// real {a: 100}
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}








