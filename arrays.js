/*
    In this file, we'll be making a new story
    about Doug, the Pokimon trainer.
*/

let backpack = [
    'poke ball', 'poke ball',
    'potion', 'beef jerky', 'running shoes'
]

let pokemon = []

// he buys oreos
backpack.push('oreos')
backpack.push('oreos')

console.log('after buying oreos, this is our backpack:')
console.log(backpack)

//professor oak gives him a pokedex and a pikachu
backpack.push('pokedex')
pokemon.push('pikachu')

console.log('after meeting professor oak, our backpack and pokemon are:')
console.log(backpack)
console.log(pokemon)

// doug encounters four pidgeys and catches them
//he finds pokeball on ground with each pidgey encounter
for (let i = 0; i < 4; i++) {
    pokemon.push('pidgey')
}

console.log('after the pidgeys, our pokemon are now:')
console.log(pokemon)

//doug gives away his running shoes and eats all his food
backpack.splice(3, 4)

console.log('after some time, our backpack is now:')
console.log(backpack)


//we encounter a new pokemon, charizard
let newPokemon = 'charizard'

//we hatch it on our first try
pokemon.push(newPokemon)
console.log('after catching charizard, our pokemon are now:')
console.log(pokemon)

//someone asks to see your cutest pokemon, which is pikachu
console.log('here is my pikachu!')
let cutestPokemon = pokemon[0]
console.log(cutestPokemon)

//trading with geneticist
let tradedPoke = pokemon.slice(1,5)
console.log(tradedPoke)

backpack.unshift('lead jynx')
console.log(backpack)

//getting rid of statue without slice or splice
backpack.shift()

console.log('backpack after getting rid of the statue:')
console.log(backpack)

//you find a wild butterfree
//you use one pokeball to catch it
//you're going to eat one of your pidgeys

//make a variable for butterfree
//cut out a pokeball using any array method
//splice out pidgey and put in butterfree where the pidgey was at
//save the new spiced array (with pidgey in it) to a variable called lunch
let favePokemon = 'butterfree'
backpack.shift()
let lunch = pokemon.splice(3, 1, favePokemon)

console.log('here is my backpack after catching butterfree')
console.log(backpack)
console.log("and here are my pokemon:")
console.log(pokemon)
console.log('and here is my lunch:')
console.log(lunch)

//pidgeys evolve into pidgeotto
//loop through all your pokemon:
//if the pokemon you're looking at is a pidgey
//replace it's value in the array with 'pidgeotto'
for (let i = 0; i < pokemon.length; i++){
    if (pokemon[i] === 'pidgey') {
        pokemon[i] = 'pidgeotto'
    }
}

console.log('after the evolution, my pokemon are now:')
console.log(pokemon)