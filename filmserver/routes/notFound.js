const fs = require('fs');
const path = require('path');
const render = require('../lib/render');

function notFound(req, res) {
    render(res, 'error.html', {error: 'not found'});
}

module.exports = notFound;