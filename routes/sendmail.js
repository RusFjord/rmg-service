const router = require('express').Router();

router.post('/sendmail', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('Works!');
});

module.exports = router;