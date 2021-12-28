const dotenv = require('dotenv')
dotenv.config()
const express = require('express')

const routes = require('./route/router')

const openDbConnection = require('./helper/db')


const port = process.env.PORT || 3000

const uri = process.env.MONGO_URI


async function main() {
    try{

        await openDbConnection(uri);

        const app = express()

        app.use(express.json())

        app.use(routes)

        app.listen(port, ()=> {
            console.log(`Server Listening on ${port}`)
        })
    } catch(error){
        console.log("main", error)
    }
}




main()