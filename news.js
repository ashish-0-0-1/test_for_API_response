const express =require('express')
var request = require('request')
const app = express()
const port=3000


    const url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-11-14&sortBy=popularity&apiKey=a97db5213afc4315935f4e1f44d3c5c6'
    request({ url, json: true }, (error,res) => {
        if (error) {
            console.log('unable to find', err)
        }
        else {
            console.log("iiiiiiiiiiii",res.body)
        }
    })





app.listen(port,()=>{
    console.log(`Server started on port ${port}`)

})