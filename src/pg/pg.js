const pgBinding = require("kube-service-bindings")
const Pool = require("pg").Pool;
const Client = require("pg").Client;
const assert = require('assert');

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

module.exports = {
    getPGConnectString,
}

const Knex = require("knex");

const config = {
    client: "cockroachdb",
    connection: getPGConnectString(),
    migrations: {
        directory: "migrations/schema",
    },
    seeds: {
        directory: "migrations/data",
    },
}

// Connect to database
const client = Knex(config);

async function initTable(client) {
    await client.migrate.latest();
    await client.seed.run();
}

(async () => {
    console.log("initializing fruit schema");
    try {
        await initTable(client);
    } catch (err) {
        console.log(err.message); //ignore migration error
    }

})().catch((err) => console.log(err.stack));
