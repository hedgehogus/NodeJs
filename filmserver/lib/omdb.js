const http = require('http');

const token ="03AOLTBLSCqgq5kJEbC47-gWcWIa5T6VOeTe0pqGVnP1DrfZ1fG0HTbprjP36OhIIEo7mrfBVjXQkuTvJeVhu64idmypA3ZeaRA87C1Ab1NNGcEHE86-TT6g0uT_GiF4pO0skItDte4USBV3LTL_H_QGnxIfWjG1mKraq9a8BQsEg9XWdSki7QkEBlOyo8nN7MaTD5zI9R73DsHB7Zazjx5WxeHm0Ttm9woi3O5V3-_6mCn9N1HcrzE6MdfHd6cro9OqK8uT2E9L6DsbXwyUDZ_dX6bJBfzttK4yBqLAUG2NAcEnDODH1WO5-DV9EPK4C-sF3X6KLqqL3vzdkG_LfFsKYRk2xRjRs2Kp0H-ZQIkOCTUjedBdqc8jYBK-cvuTasw7t6ImA5axH6rgedr-2h5C4bbE81xlmqsjV_01hn0KCgJarYCXAqLWk"

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