const pgBinding = require("kube-service-bindings")

function getMYSQLConnectString() {
    let bindingInfo;
    try {
        bindingInfo = pgBinding.getBinding('MYSQL', 'mysql')
        console.log(bindingInfo)
    } catch (err) {
        console.log(err)
    }
    return bindingInfo.connectionString;
}

module.exports = {
    getMYSQLConnectString,
}
