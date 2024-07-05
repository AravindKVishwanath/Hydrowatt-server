var express = require('express');
var app = express();
var port = process.env.PORT || 9898;
var crypto = require('crypto');
var bodyParser = require('body-parser')
var salt = 'somestring';
var iteration = 1000/// some number here;
var keylength = 64// some number here;

app.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username !== 'joemama') {
        res.send('Username is wrong');
        return;
    }
    if (crypto.pbkdf2Sync(password, salt, iteration, keylength).toString() === hashOfPassword) {
        if (password === 'plnlrtfpijpuhqylxbgqiiyipieyxvfsavzgxbbcfusqkozwpngsyejqlmjsytrmd') {
            // some logic here and return something
        } else {
            // return flag here
        }
    } else {
        res.send('Password is wrong');
    }
});
app.listen(port,()=>{
    console.log("we")
    var hell = encryptPassword("")
})

function encryptPassword(password) {
    if (!password || !this.salt) return '';
    var salt = new Buffer(this.salt, 'base64');
    return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
}
