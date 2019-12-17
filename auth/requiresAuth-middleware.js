// STRETCH goal

module.exports = (req, res, next) => {
    if (req.session && req.session.username) {
        next();
    } else {
        res.status(400).json({ message: "You are not authorized." })
    }
}