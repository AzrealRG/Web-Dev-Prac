//let and var are ways to instantiate a variable, after it is created it can be freely changed using [variable name] = value
//variables don't need to be initialized with a value attached
let myVariable = 123;
let unreal = false;
var obj = {b:3}
obj.b//returns the value 3

//const = constants, they are required to be initialized with a value and are initialized with capital letters.
//As they are constants, their value can not be changed.
const MY_VARIABLE = 123;
//can't do "MY_VARIABLE = 321" or else there will be an error.
const OBJ = {B:3}
//OBJ = {a:2} can't be done
//OBJ.b = 5 can be done as it doesn't change the object itself but the value thats held within the object

var string1 = "Hello"
var string2 = "world"
//${} is used as a formating tool to reference variables within backticks (the squiggily line quote thing)
console.log(`${string1} ${string2}!`)

//Arrays
let myArray = []
myArray.push("HI")
myArray.push("Im John")
myArray.pop()
