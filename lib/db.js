import mongoose from 'mongoose'

const connection = {}

async function connect() {
  if (connection.isConnected) {
    console.log("Already connected to MongoDB.");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected:", process.env.MONGO_URL);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
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
