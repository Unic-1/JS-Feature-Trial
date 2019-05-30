let n = 6

// Starts the timer with the specified label
console.time("Start Time")

// Prints the output if the first param is false
console.assert(n==5, "Hello")

// Clear the console
// console.clear()

// Keeps count of the number of times the label has been printed
console.count("Hello")
console.count("Hello")
console.count('NO')

// Reset the counter
console.countReset("Hello")
console.count("Hello")


// group(), groupEnd() to ident the console logs
console.group("lvl1")
console.log("level 1 - 1")
console.log("level 1 - 2")
console.group("lvl2")
console.log("level 2 - 1 ")
console.log("level 2 - 2")
console.group("lvl3")
console.log("level 3 - 1 ")
console.log("level 3 - 2")
console.log("level 3 - 3")
console.groupEnd("lvl3")
console.log("level 2 - 3")
console.groupEnd()
console.log("level 1 - 3 ")
console.groupEnd()

// Represents data in tabular format
console.table(['apple', 'orange', 'mango'])
console.table([{name: "Rohit", age: 18}, {name: "Rohan", age: 20}])
console.table([{name: "Rohit", age: 18}, {name: "Rohan", age: 20}], ["name"])

// Logs the time for the specified label
console.timeLog("Start Time")

// Stops the timer for specified labed
console.timeEnd("Start Time")
