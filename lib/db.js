import mongoose from 'mongoose'

const connection = {}

async function connect() {
  if (connection.isConnected) {
    return
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URL)
    connection.isConnected = db.connections[0].readyState
  } catch (error) {
    throw new Error('Failed to connect to MongoDB')
  }
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect()
      connection.isConnected = false
    }
  }
}

const db = { connect, disconnect }
export default db
