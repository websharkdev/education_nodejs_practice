exports.errorNotFounded = (req, res, next) => {
    res.status(404).render('404', {
        title: 'Not founded',
        path: 'not-founded'
    })
}