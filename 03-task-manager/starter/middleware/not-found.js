const notFound = (req, res) => {
    return res.status(404).res('route does not exist')
}
module.exports = notFound