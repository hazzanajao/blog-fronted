import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {
    const client = new MongoClient('mongodb+srv://username:password@cluster0.myxqth0.mongodb.net/react-blog-db?retryWrites=true&w=majority');
    await client.connect();
    db = client.db('react-blog-db');
    cb();
}

export {
    db,
    connectToDb,
};
