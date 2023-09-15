import { MongoClient } from  'mongodb'


if(!process.env.DB_STRING){
    throw new Error('Invalid/Missing env var')
}

const uri = process.env.DB_STRING
const options = {}

let client
let clientPromise 


client = new MongoClient(uri, options)
clientPromise = client.connect()


export default clientPromise