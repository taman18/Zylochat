import { MongoClient } from "mongodb";
import logger from '../utils/logger.js';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    logger.error("[-] Missing MongoDB URI in environment variables [-]");
    throw new Error("[-] Missing MongoDB URI [-]");
}

let cached = (global).mongoClient || { conn: null, promise: null };

async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = new MongoClient(MONGODB_URI, {
            maxPoolSize: 10,
        })
            .connect()
            .then((client) => {
                logger.info("[+] Successfully connected to MongoDB [+]");
                return client;
            })
            .catch((error) => {
                logger.error("[-] MongoDB Connection Failed [-]", error);
                throw error;
            });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

(global).mongoClient = cached;

export default connectDB;