/*FILTER
    1-Criar uma Array com números e filtrar para uma nova Array, apenas os números PARES e DIVISÍVEIS por 5
    2-Filtrar para nova Array, apenas empresas fundadas depois de 1975 e que tenham mais de 2 milhões de dólares de valor
    de mercado
*/

const List = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]
/*
const newList = List.filter ( number => {

    if(number % 2 !== 0 || number % 5 !== 0) return false
    else return true
    //const PairNumber = number % 2 === 0
    //const divisibleByFive = number % 5 === 0

   //return number % 2 === 0 && number % 5 === 0
  
})
*/
const newList = List.filter(number => { return number % 2 === 0 && number % 5 === 0; });

console.log(newList)

const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},
];

const newListCompanies = companies.filter ( company => {

    if(company.marketValue > 200 && company.foundedOn > 1975) return true

})

console.log(newListCompanies)