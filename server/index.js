const express = require('express')
const {json} = require('body-parser')
const axios = require('axios')
const cors = require('cors')

const port = 3001

const app = express()

app.use(json())
app.use(cors())

app.get('/api/getUnits', (req, res) => {
    axios.get('https://age-of-empires-2-api.herokuapp.com//api/v1/units')
        .then(response => {
            console.log('hit')
            return res.status(200).send(response.data)
        }).catch(err => console.log(err))
})

app.listen(port, () => {
    console.log(`We are live on port: ${port}`)
})