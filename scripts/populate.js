const User = require('../models/user')
const fs = require('fs')
const jsondata = require('../jsondata/customers.json')
const axios = require('axios')

console.log(jsondata)

const jotain = jsondata.map(n=>
    axios.post('http://localhost:3001/api/register', n
    ).then((response)=>{
        console.log(response)
    })
)
