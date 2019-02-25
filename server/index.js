const express = require('express')
const {json} = require('body-parser')
const axios = require('axios')
const cors = require('cors')

let units = []
let hubs = []

const port = 3001

const app = express()

app.use(json())
app.use(cors())

app.get('/api/getUnits', (req, res) => {
    console.log('launched')
    if(units[0]){
        console.log('got old stuff')
        let sendObj = {units, hubs}
        res.status(200).send(sendObj)
    } else  
        axios.get('https://age-of-empires-2-api.herokuapp.com//api/v1/units')
        .then(response => {
            
            let newUnits = response.data.units.map(unit => {
                if(!hubs.includes(unit.created_in.split('/').pop())){
                    hubs.push(unit.created_in.split('/').pop())
                }
                return {...unit, created_in: unit.created_in.split('/').pop()}
            })
            console.log(hubs)
            units = newUnits 
            let sendObj = {units, hubs}
            return res.status(200).send(sendObj)
        }).catch(err => console.log(err))
})

app.listen(port, () => {
    console.log(`We are live on port: ${port}`)
})