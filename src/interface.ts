import { type } from "os"

// 对象类型接口
interface List {
    readonly id: number;
    name: string;
    [x: string]: any;
    age?: number
}
interface Result {
    data: List[]
}
function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name)
        if (value.age) {
            console.log(value.age)
        }
        // value.id++ // error: readonly
    })
}
let result = {
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B'},
    ]
}
render(result)

render({
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B', age: 10},
    ]
} as Result)

render(<Result> {
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B'},
    ]
})

interface StringArray {
    [index: number]: string
}
let chars: StringArray = ['A', 'B']

interface Names {
    [x: string]: string;
    // y: number;
    [z: number]: string;
    // [z: number]: number; // error: assignment type need to be the Child of before; unless it is [x: string]: any before
}





// 函数类型接口
type Add = (x: number, y: number) => number
let add: Add = (a, b) => a + b

interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

function getLib() {
    let lib: Lib = (() => {}) as Lib
    lib.version = '1.0'
    lib.doSomething = () => {}
    return lib
}

let lib1 = getLib()
lib1()
lib1.doSomething()
let lib2 = getLib()
