// import util1 from './util1'
// import {fn1,fn2} from './util2'

// console.log(util1.a)
// fn1()
// fn2()

// [1,2,3].map(item=>item + 1)

// class MathHandle{
//     constructor(x,y){
//         this.x = x
//         this.y = y
//     }
//     add(){
//         return this.x + this.y
//     }
// }

// const m = new MathHandle(1,2)
// // console.log(m.add())

// console.log(typeof MathHandle)  //function
// console.log(MathHandle.prototype.constructor === MathHandle)   //true
// console.log(m.__proto__ === MathHandle.prototype)   //true

// 动物
// class Animal {
//     constructor(name){
//         this.name = name
//     }
//     eat(){
//         console.log(this.name + ' eat')
//     }
// }

// // 狗
// class Dog extends Animal {
//     constructor(name){
//         super(name)
//         this.name = name
//     }
//     say () {
//         console.log(this.name + ' say')
//     }
// }

// // 绑定原型，实现继承
// const dog = new Dog('哈士奇')
// dog.say()   //哈士奇 say
// dog.eat()   //哈士奇 eat

// function loadImg(src, callback, fail){
//     var img = document.createElement('img')
//     img.onload = function(){
//         callback(img)
//     }
//     img.onerror = function(){
//         fail()
//     }
//     img.src = src
//     // console.log(img)
// }

// var src = 'https://www.imooc.com/static/img/index/logo.png'
// loadImg(src, function(img){
//     console.log(img.width)
// }, function(){
//     console.log('fail')
// })

function loadImg(src){
    const promise = new Promise(function(resolve, reject){
        var img = document.createElement('img')
        img.onload = function(){
            resolve(img)
        }
        img.onerror = function(){
            reject()
        }
        img.src = src
    })
    return promise
}

var src = 'https://www.imooc.com/static/img/index/logo.png'
var result = loadImg(src)
result.then(function(img){
    console.log(img.width)
}, function(){
    console.log('fail')
})
result.then(function(img){
    console.log(img.height)
})














