import mongoose, { Mongoose } from 'mongoose';

// Cache the connection in the global scope to avoid re-creating during hot reloads
type GlobalWithMongoose = typeof globalThis & {
	mongooseConn?: {
		conn: Mongoose | null;
		promise: Promise<Mongoose> | null;
	};
};

const globalWithMongoose = global as GlobalWithMongoose;

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
	throw new Error('MONGODB_URI is not set in environment variables');
}

let cached = globalWithMongoose.mongooseConn;

if (!cached) {
	cached = globalWithMongoose.mongooseConn = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<Mongoose> {
	if (cached?.conn) return cached.conn;

	if (!cached?.promise) {
		cached!.promise = mongoose.connect(MONGODB_URI, {
			dbName: process.env.MONGODB_DB_NAME,
		} as any);
	}

	cached!.conn = await cached!.promise!;
	return cached!.conn!;
}


