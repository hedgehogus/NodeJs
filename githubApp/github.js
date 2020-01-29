//const http = require('http');
const https = require('https');

function getRepos(username, done) {
    if (!username) return done(new Error('You need to set your username'));

    const options = {
        hostname: 'api.github.com',
        path: `/users/${username}/repos`,
        headers: {'User-Agent': 'hedgehogus'}
    }
    const req = https.get(options, (res) => {
        // console.log(res.statusCode);
        // console.log(res.statusMessage);
        res.setEncoding('utf-8')

        if (res.statusCode === 200){

            let body = '';

            res.on('data', data => {
                body += data;
            });

            res.on('end', () => {
                try {
                    const result = JSON.parse(body);
                    done(null, result);
                } catch (error) {
                    done(new Error('Invalid data format'))
                }
            });
        } else {
            done(new Error(`response not received (${res.statusCode}, ${res.statusMessage})`));
        }
    });

    req.on('error', error => done(new Error(`request not sent (${error.message})`)));
}

module.exports = {
    getRepos
}