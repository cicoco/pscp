module.exports = function () {

    var args = process.argv.splice(2);

    var len = args.length;
    if (!args || len < 5) {
        console.log("params is missing, please check it.");
        return;
    }

    var _src = [];
    for (var i = 0; i < len - 4; i++) {
        _src[i] = args[3 + i];
    }

    var deploy = require('scp-deploy')

    deploy({
        host: args[0],
        port: 22,
        username: args[1],
        password: args[2],
        src: _src,
        path: args[len - 1]
    }).then((info) => {
        console.log(info)
    }).catch((err) => {
        console.log(err)
    })
}