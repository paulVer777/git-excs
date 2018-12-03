
///////////////// Object destructuring ///////////////////////////////////


const person = {
    age: 26,
    location:{
    city:'Lublin',
    temp:17
    }
}


const {name = 'anonymous',age} = person; //if name doesn't exists in person, name is still going to be created with default value which is 'anonymous'
//if we don't provide the default, name is going to be undefined


const {city, temp: temperature = 'unknown'} = person.location // here we change the name of destructured variable to temperature
// if temp doesn't exists, engine will create temperature variable with value of 'unknown'

// console.log(`${name} is ${age}`)

// console.log(temperature)




//////////////////////////// Array destructuring ///////////////////

const winds = ['Zephyr', 'Aphelion' , 'Columbus', 'Virios', 'Exaltus', 'Saheus', 'Faxeus']

const [, cold , hot, freezy] = winds // we just leave the first item in array and start from second 

console.log( hot,freezy)


const locations = []

const [, ,place = 'Lublin'] = locations // we are leaving first two items, we set the default for third item (if third item doesnt exist default will be used)

console.log(place)

const item = ['Coffe (hot)', '$2.00', '$2.50','$2.75']


const [type, ,price] = item

console.log(`A medium ${type} costs ${price}`)