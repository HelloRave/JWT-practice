const jwt = require('jsonwebtoken');
const fs = require('fs');

const PRIV_KEY = fs.readFileSync(__dirname + '/pri_key.pem', 'utf-8');
const PUB_KEY = fs.readFileSync(__dirname + '/pub_key.pem', 'utf-8');

const PAYLOAD = {
    "sub": "1234567890",
    "name": "John Doe",
    "admin": true,
    "iat": 1516239022
  }

const signedJWT = jwt.sign(PAYLOAD, PRIV_KEY, {algorithm: 'RS256'});

jwt.verify(signedJWT, PUB_KEY, {algorithms: ['RS256']}, (err, payload) => {
    console.log(payload);
})