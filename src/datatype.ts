// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, 'd']

// 元组
let tuple: [number, string] = [0, '1']
tuple.push(2) // no suggest
console.log(tuple)
// tuple[2] // error,  越界访问

// 函数
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a: number, b: number) => a + b

// 对象
// let obj: object = {a: 1, b: 2} // assignment a throw error
let obj: {a: number, b: number} = {a: 1, b: 2}
obj.a = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)

// undefined, null
let un: undefined = undefined
let nu: null = null
// num = undefined // 将 tsconfig.json 的 strictNullChecks 设置为 false 就可以将 undefined, null 赋值给任何类型的值，否则会报错
// num = null

// void: return undefined
let noReturn = () => {}
console.log(void 0) // undefined

// any
let x
x = 1
x = 'a'
x = {}

// never: no return value
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true) {}
}