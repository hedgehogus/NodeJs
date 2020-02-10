const http = require('http');

const token ="03AOLTBLTc70V6bkQXlm7ISeaDFWxev1VkgHyYZTTtGuk7rL0Q_qIlHD4D2XQyaOEWFg9AExDaK37rUSbFNAc4zTeWekMuj-Lo2hqTPfyjwaQcB3085xDSdm9bpqUzY2ZfJgbBqTFqMhzCAeIMArO5UC53W5s2Pmoh-YBTNbobMdVvB0WOUdAgMdcfz1STu8-JHRr-MwcATpslJINYZdAg0s0HEJwx0555feNmYvCxUxe4N4LD5c6n2BWxOzBVtOqqKGvwhjpoM9psGFRlASjAWlER6TfOJQYW1oP7US5Au5aTbCvmSae9yfbVLW3eGP7aIk5w8hElnJ3k3Eixd55u8Sykk29stcbhOwVotMwLpfikNr6bjGKoHv9aL87Xpm4eA7v_8p7oEY9OUgkBxw4CL2LrByySV5511OJAF8j0wkNsgWzFQ7Vef5g"

function get(title, done) {
    const req = http.get(`http://www.omdbapi.com/demo.aspx/?t=${title}&token=${token}`, res => {        
        if (res.statusCode !== 200) {
            done(new Error(`Error: ${res.statusMessage} (${res.statusCode})`));
            res.resume(); //we need to invoke this method to prevent memory leak
            return;
        }

        res.setEncoding('utf-8');

        let body = '';

        res.on('data', data => body += data);

        res.on('end', () => {
            let result;

            try {
                result = JSON.parse(body);
            } catch (error) {
                done(error);
            }

            if (result.Response === 'False') return done (new Error('Movie not found'));

            done (null, result)
        });
    });

    req.on('error', error => done(error));
}

module.exports = {
    get
}