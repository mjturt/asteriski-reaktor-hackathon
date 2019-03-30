// Script for importing JSON:s

const fs = require('fs')
const axios = require('axios')

// Here JSON that you want to import to database
//const jsondata = require('../jsondata/customers.json')
const jsondata = require('../jsondata/employees.json')

console.log(jsondata)

const jotain = jsondata.map(n=>
    //axios.post('http://localhost:3001/api/register', n
    axios.post('http://localhost:3001/api/adminregister', n
    ).then((response)=>{
        console.log(response)
    })
)
