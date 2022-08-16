const pgBinding = require("kube-service-bindings")
const Pool = require("pg").Pool;
const Client = require("pg").Client;
const assert = require('assert');

function getPGConnectString() {
    let bindingInfo;
    try {
        bindingInfo = pgBinding.getBinding('POSTGRESQL', 'pg-crdb')
    } catch (err) {
        console.log(err)
    }
    return bindingInfo.connectionString;
}

module.exports = {
    getPGConnectString,
}
