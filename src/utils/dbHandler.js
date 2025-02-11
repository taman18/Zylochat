import connectDB from '../lib/mongodb.js';
import logger from '../utils/logger.js';


async function dbHandler(
    collectionName,
    action,
    filter = {},
    data = {},
    skip = 0,
    limit = null
) {
    const client = await connectDB();
    const db = client.db();
    const collection = db.collection(collectionName);

    try {
        switch (action.toLowerCase()) {
            case "create":
                const insertResult = await collection.insertOne(data);
                const createdDocument = await collection.findOne({ _id: insertResult.insertedId });
                return createdDocument;

            case "read":
                const query = collection.find(filter);
                if (skip > 0) query.skip(skip);
                if (limit !== null) query.limit(limit);
                const readResult = await query.toArray();
                return readResult;

            case "update":
                const updateResult = await collection.updateOne(filter,
                    {
                        $set: data,
                        $setOnInsert: {
                            createdAt: new Date(),
                        },
                    },
                    {
                        upsert: true,
                    }
                );
                
                if (updateResult.upsertedCount > 0) {
                    return { message: `Document created successfully (upserted) ${updateResult}` };
                }
                if (updateResult.modifiedCount > 0) {
                    return { message: `Document updated successfully ${updateResult}` };
                }
                return { message: `No document found to update ${updateResult}` };

            case "delete":
                const deleteResult = await collection.deleteOne(filter);
                return deleteResult.deletedCount > 0
                    ? { message: `Document deleted successfully ${deleteResult}` }
                    : { message: `No document found to delete ${deleteResult}` };

            default:
                throw new Error("Invalid action. Use create, read, update, or delete.");
        }
    } catch (error) {
        logger.error("Error in performing CRUD operation:", error);
        throw new Error(`Failed to perform CRUD operation, ${error}`);
    }
}

export default dbHandler;