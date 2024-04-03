import { MongoClient, ServerApiVersion } from 'mongodb'

const connectDB = () => {
  try {
    const uri = process.env.MONGODB_URI || ''
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    })
    const db = client.db('storage')
    return db
  } catch (error) {
    console.error(error)
  }
}

export default connectDB