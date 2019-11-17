// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
console.log(Role)
console.log(Role.Reporter)

// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}

// 异构枚举: 数字枚举和字符串枚举的集合
enum Answer {
    N,
    Y = 'yes'
}
console.log(Answer)

// 枚举成员
// Role.Reporter = 2 // error: read only
enum Char {
    // compile: 编译时计算
    a,
    b = Char.a,
    c = 1 + 3,
    // computed: 运行时计算
    d = Math.random(),
    e = '123'.length
}

// 常量枚举: 不存储对象，只存储对象值
const enum Month {
    Jan,
    Feb,
    Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banner' }
let e: E = 3
let f: F = 3
console.log(e) // 3
console.log(E) // {0: "a", 1: "b", a: 0, b: 1}
// e === f // error: different enum can not compare

let e1: E.a = 1
let e2: E.b
// e1 === e2 // error: different enum value can not compare
let e3: E.a = 1
e1 === e3 // must assignment before compare

let g1: G = G.b // or G.a
let g2: G.a = G.a // Only assignment G.a