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