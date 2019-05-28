//variable to sort in asceding and descending order
let sortDirection = false;

//Dummy data, could be an API, sql data etc...
let personData = [
    {name: 'Glen', age: 25},
    {
        name: 'Michael',
        age: 32
    },
    {
        name: 'Jennifer',
        age: 42
    },
    {
        name: 'Dylan',
        age: 34
    },
    {
        name: 'Marie',
        age: 23
    },
]

window.onload = () => {
    loadTableData(personData)
}

function loadTableData(personData){
    const tableBody = document.getElementById('tableData')
    let dataHtml = '';

    for(let person of personData){
        //this could be replicated using jquery
        dataHtml += `<tr><td>${person.name}</td><td>${person.age}</td></tr>`
    }
    console.log(dataHtml)

    tableBody.innerHTML = dataHtml
}