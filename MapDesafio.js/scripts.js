/*
    MAP - DESAFIO
    1-Criar uma ARRAY com lista de pessoas que irão a um evento e declarar se são VIP ou não.
     Caso seja vip, vai ficar na área BLACK, se não, fica na área GREEN.
    2-Criar uma ARRAY com uma lista de estudantes e colocar notas de 0 
    a 10 em cada aluno. Se o aluno tirou 7 ou mais, APROVADO, se tirou menos de 7, REPROVADO.
*/
const list = [
    {name: 'Adrielle', vip: true},
    {name: 'Berenice', vip: false},
    {name: 'Carla', vip: true},
    {name: 'Diana', vip: true},
    {name: 'Ester', vip: false},
    {name: 'Flávia', vip: true},
    {name: 'Gilka', vip: false},
];
const newList = list.map ( client => { 
    const newList = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? 'Black' : 'Green'
    }
    return newList
})
console.log(newList)

/*
const newList = list.map ( client => {
    let blackOrGreenSector

    if(client.vip === true){
        console.log(blackOrGreenSector = 'Black')
    } else{
        console.log(blackOrGreenSector = 'Green')
    }

    const listSector = {
        name: client.name,
        vip: client.vip,
        sector: blackOrGreenSector
    }

    return listSector
})

console.log(newList)
*/




const students = [
    {name: 'Adrielle', testGrade: 5},
    {name: 'Adilson', testGrade: 7},
    {name: 'Bianca', testGrade: 3},
    {name: 'Beraldo', testGrade: 6},
    {name: 'Carolina', testGrade: 9},
    {name: 'Camilo', testGrade: 10},
    {name: 'Daniele', testGrade: 8},
    {name: 'Donato', testGrade: 10},
    {name: 'Edicléia', testGrade: 7},
    {name: 'Edson', testGrade: 2},
    {name: 'Fabiola', testGrade: 9},
    {name: 'Fulvio', testGrade: 8},
    {name: 'Graça' , testGrade: 8},
    {name: 'Glauco' , testGrade: 10}
]

const resultList = students.map ( (student) =>{

    const result = {
        name: student.name,
        result: student.testGrade >= 7 ? 'Aprovado(a)' : 'Reprovado(a)'
    }
    return result
})

console.log(resultList)