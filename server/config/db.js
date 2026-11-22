import mongoose from 'mongoose';

let isMongoConnected = false;

export const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/banmanche';
  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 2000,
    });
    isMongoConnected = true;
    console.log(`[MongoDB] Connected successfully to: ${conn.connection.host}`);
  } catch (error) {
    isMongoConnected = false;
    console.warn(`[MongoDB] Local/Cloud MongoDB not reachable (${error.message}).`);
    console.log(`[MERN Engine] Activating high-speed in-memory seeded store for seamless zero-setup demo.`);
  }
};

export const getMongoStatus = () => isMongoConnected;
