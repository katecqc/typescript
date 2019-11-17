class Dog {
    constructor(name: string) {
        this.name = name
    }
    name: string
    run() {}
    public pub() {}
    private pri() {}
    protected pro() {}
    readonly legs: number = 4
    static food: string = 'boned'
}
console.log(Dog.prototype)
// 实例化
let dog = new Dog('wangwang')
console.log(dog)
// dog.pri() // error
// dog.pro() // error
// dog.legs++ // error
// console.log(dog.food) // error
console.log(Dog.food)
console.log(dog.name)

// 子类
class Husky extends Dog {
    constructor (name: string, color: string) {
        super(name)
        this.color = color
        // this.pri() // error
        this.pro()
        // this.legs++ // error
        // this.food // error
    }
    color: string
}

console.log(Husky.food)
console.log(Husky.name)
