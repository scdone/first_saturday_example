// these do not have parameters

// // function declaration
// function sayhi() {
//   console.log('Hi!')
// }

// // function expression
// const intro = function() {
//   console.log(`The name's Stet *reaches out hand*`)
// }

// // arrow function
// const bye = () => {console.log('Good day, now.')}

// invokes the functions without parameters
sayhi()
intro()
bye()


// now let's make some with parameters

//regular function
function sayhello(name) {
  console.log(`Howdy, pardner ${name}!`) 
}

// expression function
const introduction = function(myname) {
  console.log(`My name is ${myname}, nice to meet you.`)
}

// arrow function - note, I can omit parenthesis since there is one parameter
// also, because it is an arrow function written inline, I don't need curly brackets either
const farewell = salutation => console.log(`${salutation}, good friend!`)

// arrow function with multiple parameters, not inline
const ps = (segue, adjective, noun) => {
  console.log(`${segue}...`)
  console.log(`I like your ${adjective} ${noun}.`)
}


// invokes the functions with parameters
sayhello('Jesse James')
introduction('StettyBoi')
farewell('So long')
ps('By the way', 'blue', 'hat')