// Script for importing JSON:s

const User = require('../models/user')
const fs = require('fs')
const axios = require('axios')

// Here JSON that you want to import to database
const jsondata = require('../jsondata/customers.json')

console.log(jsondata)

const jotain = jsondata.map(n=>
    axios.post('http://localhost:3001/api/register', n
    ).then((response)=>{
        console.log(response)
    })
)
