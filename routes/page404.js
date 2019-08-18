const router = require('express').Router();

router.use( (req, res) => {
    res.status(404).send('API unreachable');    
});

module.exports = router;