function notFound(req, res) {
    res.render('error.html', {error: 'not found'});
}

module.exports = notFound;