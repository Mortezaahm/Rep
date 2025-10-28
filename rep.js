//Function Declaration
//(Global och arbetar med hosting)
//Kan loggas före deklarationen
function sum(a, b) {
    return a + b
}

//Arrow Function
//Kan inte hoistas – du måste deklarera innan du använder den
//Kortare syntax, passar bra för små funktioner, callbacks och funktioner inuti metoder
const sum = (a, b) => a + b

/*
Vill du skapa ny array? → map/filter
Vill du hitta EN sak? → find
Vill du bara göra något på varje? → forEach
Använd forEach när du vill göra något med varje element utan att tänka på index
Använd for när du behöver full kontroll över iterationen, du bestämmer vilket index du ska utgå ifrån och vart du vill sluta

*/

const users = [
    { name: 'Anna', age: 22 },
    { name: 'Bo', age: 31 },
    { name: 'Cia', age: 17 }
]

// filter
const adults = users.filter((u) => u.age >= 18)

// map
const names = users.map((u) => u.name)

// find
const firstTeen = users.find((u) => u.age < 18)

let firstTeenForEach // Variabel att spara resultatet

//foreach mer manuellt
users.forEach((u) => {
    if (!firstTeenForEach && u.age < 18) {
        // Om vi inte redan hittat någon tonåring
        firstTeenForEach = u // Spara användaren
    }
})

//en for loop
let firstTeenFor = null

for (let i = 0; i < users.length; i++) {
    if (users[i].age < 18) {
        firstTeenFor = users[i] // Spara första tonåringen
        break // Bryt loopen direkt när vi hittat första matchen
    }
}
