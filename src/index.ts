// let id = 5 // JS way
let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']


// Tuple
let person: [number, string, boolean] = [1, 'Test', true]
// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Test1'],
  [2, 'Test2'],
  [3, 'Test3']
]


// Union
let pid: string | number
pid = '22'


// Enum - values default to numeric order (0, 1, 2, 3)
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

console.log(Direction1.Up, Direction2.Up)


// Objects
// --- how to define #1 ---
type User1 = {
  id: number,
  name: string
}
const user1: User1 = {
  id: 1,
  name: 'John'
}

// --- how to define #2 ---
const user2: {
  id: number,
  name: string
} = {
  id: 1,
  name: 'John'
}


// Type Assertion
let cid: any = 1
// let customerId = <number>cid  // syntax #1 to change type
let customerId = cid as number  // syntax #2 to change type


// Functions
// types to parameters
// types to return value
function addNum(x: number, y: number): number {
  return x + y
}
console.log(addNum(2, 3))

// Void
function log(message: string | number): void {
  console.log(message)
}
log('reeee')


// Interfaces
interface UserInterface {
  id: number,
  //readonly id: number, //readonly property
  name: string,
  age?: number //option property
}
const userI1: UserInterface = {
  id: 1,
  name: 'John'
}

// To test the readonly id value in the UserInterface which is commented out, the below would error if uncommented
// user1.id = 5

// Interface with a function
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const subtract: MathFunc = (x: number, y: number): number => x - y


// Classes
class Person1 {
  private id: number  //private property
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}
const kevin1 = new Person1(1, 'Kevin1')

// Implemented interface class
interface PersonInterface {
  id: number
  name: string
  register(): string
}

class Person2 implements PersonInterface {
  id: number  //private property
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const kevin2 = new Person2(2, 'Kevin2')

// Extended class
class Employee extends Person2 {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Kevin3', 'Developer')


// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4, 5])
let strArray = getArray<string>(['test1', 'test2', 'test3'])
// numArray.push('hello')  // This will error due to the <number> generic