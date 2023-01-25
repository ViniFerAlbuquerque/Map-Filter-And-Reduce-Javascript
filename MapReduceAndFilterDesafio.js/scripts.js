/*  MAP, REDUCE E FILTER
    Pegar a Array com a lista das empresas dos exercícios e fazer o seguinte:
    1 Adicionar 10% de valor de mercado em cada uma delas
    2 Filtrar apenas as empresas mais antigas (fundadas antes dos anos 2000)
    3 Somar os valores de mercado de cada uma das empresas antigas filtradas
*/

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
];

/*const newCompanies = companies.map ( company => { 
  const newCompanies = {
   company  .name,
   company.marketValue = company.marketValue + company.marketValue / 10, 
   company.CEO,
   company.foundedOn
   }
   return company })
   const newCompanies2 = newCompanies.filter(company => company.foundedOn (acc + current.marketValue), 0 )
   console.log (newCompanies)
*/


/*
 const addMarketValue = companies.map ( company => {

     const addMarketValue = {
         name: company.name,
         marketValue: (company.marketValue * 1.10).toFixed(1),
         CEO: company.CEO,
         foundedOn: company.foundedOn
     }

     return addMarketValue
 })

 console.log(addMarketValue)
/*
 const addMarketValue = [
    {name: 'Samsung', marketValue: '55.0', CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: '456.5', CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: '128.7', CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: '421.3', CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: '33.0', CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: '929.5', CEO: 'Tim Cook', foundedOn: 1976},
  ]

  const oldCompanies = addMarketValue.filter (company =>{
    return company.foundedOn < 2000
  })
console.log(oldCompanies)
*/
/*
newAddMarketValue = [
    {name: 'Samsung', marketValue: '55.0', CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: '456.5', CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: '128.7', CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Apple', marketValue: '929.5', CEO: 'Tim Cook', foundedOn: 1976},
  ]
  
  const sum = newAddMarketValue.reduce( (acc,current) =>{
    return acc.company+current.marketValue
  },0)
  console.log (sum)
*/

const addPercent = company => {
  company.marketValue = company.marketValue+company.marketValue/10
  return company
  }

const oldCompanies = company => company.foundedOn<2000
const allOldCompanies=(acc,company) => acc+company.marketValue

  const myBestCompanies = companies.map(addPercent)
  .filter(oldCompanies)
  .reduce(allOldCompanies,0)

  console.log(myBestCompanies)