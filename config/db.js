
//Usar mongose

'use strict'

const {MongoClient} = require('mongoDB'),
{USER_DB,
    PSW_DB,
    NAME_DB} = process.env,
    mongoURL = 'mongodb+srv://${USER_DB}:${PSW_DB}@dbx1.jodqi.mongodb.net/${NAME_DB}?retryWrites=true&w=majority'

let connection

let connectDB = async() =>{
    if (connection) return connection 

    let cliente

    try {
        cliente = await MongoClient.connect(mongoURL,{
            useUnifiedTopology:true,
            useNewUrlParser: true
        })
        connection = cliente.db(NAME_DB)
        console.log('Db conectada')
    }catch (error){
        console.log(error)
        process.exit(1)
    }
    return connection
}

module.exports = connectDB 