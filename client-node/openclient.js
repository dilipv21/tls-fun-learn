const filePath = process.env.FILE_PATH;

const https = require('https');
const fs = require('fs');

const optionTLS = {
    hostname: 'localhost',
    port: 8443,
    path: '/v1/secure',
    method: 'GET',
    ca: fs.readFileSync(filePath+'ca.crt') // Trust the server's CA
};

//Use this  option to encounter Cert issue  client not using ca file.
const optionUnsecured = {
    hostname: 'localhost',
    port: 8443,
    path: '/v1/secure',
    method: 'GET',
};

//mtls example
const optionMTLS = {
    hostname: 'localhost',
    port: 8443,
    path: '/v1/secure',
    method: 'GET',
    key: fs.readFileSync(filePath+'client.key'),
    cert: fs.readFileSync(filePath+'client.crt'),
    ca: fs.readFileSync(filePath+'ca.crt') // Trust the server's CA
};

const req = https.request(optionMTLS, res => {
    res.on('data', d => process.stdout.write(d));
});
req.end();
