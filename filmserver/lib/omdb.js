const http = require('http');

const token ="03AOLTBLSj4QzzpiswwKLnWf3lNx_k1LO-wAmB2H0RAWldflGnwdQqriSeQG_RsiHK-GOxk45WNeLlpo019vEOH6_DLfwtza4Fxt0TqLFf46H8rgp0PFgMepey_DIHQmqDSvSRCGpuKVKdKmB_gCgF9SjjhLI7zctWjSqr0ciphZv5wjksix8TiCM2N-mYPuSYG0uVOjGpf9W6Up8o20ikeBe635uSi_CJ2vkPkdy8pt6hqCBHD1qqLupe-TTNJDQvn8e4MOJ_twT-AbPfnjBoM_QB9Yd4dYVjCkLLBAvl_VPv4F0mvBYbesHDhjQtKqc9jcTOHtJbZN65DGiK2pG_HKb1STt8h7SPNW0mkP1GkG6zRYrzNu0IpAQEIckVw3KK-5IOMOK6lW7_leV2HiLC_VVZ1BzU-yJo1hhXFKdvDKJpIOXJcFm8FMg"

function get(title, done) {
    const req = http.get(`http://www.omdbapi.com/demo.aspx/?t=${title}&token=${token}`, res => {        
        if (res.statusCode !== 200) {
            done(new Error(`Error: ${res.statusMessage} (${res.statusCode})`));
            res.resume(); //we need to invoke thish method to prevent memory leak
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