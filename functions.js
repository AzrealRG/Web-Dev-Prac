function addition(var1, var2){
    console.log(var1+var2)
}
//let var1 = 1
//let var2 = 2
//addition(var1, var2)

function greetings(name){
    console.log(`Hello there ${name}!`)
}
//let var1 = "Brian Leon"
//greetings(var1)


//"greetings='salutations' makes it so that if there is no input for greetings, it'll say salutations"
function salutations(name, greeting='Salutations'){
    console.log(`${greeting} ${name}!`)
}
let var1 = "Derek Mei"
//salutations(var1)
//salutations(var1, "Hello")

function evens(num){
    if(num %2 == 0){
        return true
    }
    return false
}
//console.log(evens(1))

function displayTimeDiff(){
    console.log("5 seconds have elapsed")
}
//setTimeout will run the first input(displayTimeDiff) after the miliseconds that are inputted(5000)
//setTimeout(displayTimeDiff, 5000)