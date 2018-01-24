/* HERE IS MONGODB */
const mongo = require("mongodb").MongoClient;
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/bankerydare";


/**
 * Find documents in an collection by matching search criteria.
 *
 * @async
 *
 * @param {string} dsn        DSN to connect to database.
 * @param {string} colName    Name of collection.
 * @param {object} criteria   Search criteria.
 * @param {object} projection What to project in results.
 * @param {number} limit      Limit the number of documents to retrieve.
 *
 * @throws Error when database operation fails.
 *
 * @return {Promise<array>} The resultset as an array.
 */
let findInCollection = async (colName, criteria, projection, limit) => {
    const db  = await mongo.connect(dsn);
    const col = await db.collection(colName);
    const res = await col.find(criteria, projection).limit(limit).toArray();

    await db.close();

    return res;
}

let insertInCollection = async (colName, bObj) => {
    const db  = await mongo.connect(dsn);
    const col = await db.collection(colName);
    let bankerydareObj = JSON.parse(bObj);
    const insertInC = await col.insert(bankerydareObj);

    await db.close();

    return insertInC;
}

let updateInCollection = async (colName, oldEntry, newEntry ) => {
    const db  = await mongo.connect(dsn);
    const col = await db.collection(colName);
    let oldEntryP = JSON.parse(oldEntry);
    let newEntryP = JSON.parse(newEntry);
    let update = await col.update(oldEntryP, newEntryP);

    await db.close();

    return update;
}

let dropCollection = async (colName) => {
    const db  = await mongo.connect(dsn);
    const col = await db.collection(colName);
    let drop = await col.drop();

    await db.close();

    return drop;
}

module.exports = {
    findInCollection : findInCollection,
    insertInCollection : insertInCollection,
    updateInCollection : updateInCollection,
    dropCollection : dropCollection
};
