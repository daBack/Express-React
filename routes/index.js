const db = require('../public/js/functions_db');

exports.index = (req, res) => {
    res.render('index', {title: 'Oscar Bäck'});
};

exports.about = (req, res) => {
    res.render('about', {title: 'About'});
};

exports.report = (req, res) => {
    res.render('report', {title: 'Reports'});
};

exports.chat = (req, res) => {
    res.render('chat', {title: 'Chat'});
};

exports.db = (req, res) => {
    res.render('mongodb', {title: 'MongoDb'});
};






exports.find = async (req, res) => {
    try {
        let resp = await db.findInCollection("crowd", {}, {}, 0);

        console.log(resp);
        res.json(resp);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

exports.insert = async (req, res) => {
    try {
        let object = await req.params.ob;
        console.log(object);
        await db.insertInCollection("crowd", object);
    } catch (err) {
        console.log(err);
        res.json(err);
        console.log("hehehgehgheg");
    }
}

exports.drop = async (req, res) => {
    await db.dropCollection("crowd");
    res.send("Dropped table");
}

exports.update = async (req, res) => {
    try {
        let updateFrom = await req.params.uf;
        let updateTo = await req.params.ut;
        console.log(updateFrom);
        console.log(updateTo);
        await db.updateInCollection("crowd", updateFrom, updateTo);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
}
