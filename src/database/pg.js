const pgBinding = require("kube-service-bindings")
const Pool = require("pg").Pool;


function getPGConnectString() {
    let bindingInfo;
    try {
        bindingInfo = pgBinding.getBinding('POSTGRESQL', 'pg-crdb')
        console.log(bindingInfo)
    } catch (err) {
        console.log(err)
    }
    return bindingInfo.connectionString;
}

function initDb() {
    (async() => {
        if (connPool) {
            console.warn("database connection had been created already.")
            return;
        }

        const connStr = getPGConnectString();
        console.log("connstr--->", connStr);

        const pool = new Pool({connStr});

        connPool = await pool.connect();

        console.log("pg database connected.")
    })().catch((err) => console.log("err from async: " + err.stack));
}

function getPGConn() {
    assert.ok(connPool, "Db has not been initialized. Please called init first.");
    return connPool;
}

let connPool;
module.exports = {
    getPGConnectString,
    getPGConn,
    initDb,
}
