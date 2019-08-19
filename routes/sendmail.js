const router = require('express').Router();

router.post('/sendmail', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('Works!');
});

router.get('/sendmail', (req, res) => {
    res.send("It's work!");
});

module.exports = router;