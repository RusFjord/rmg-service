const router = require('express').Router();
const emailjs = require('emailjs/email');
const fs = require('fs');

router.post('/sendmail', (req, res) => {
	const data = req.body;
	const emailSet = fs.readFileSync('settings/email.set', 'utf8');
    const config = JSON.parse(emailSet);

	const text = `Получено обращение с сайта\rИмя: ${data.name}\rТелефон: ${data.phone}\rЭл. почта: ${data.email}\rОрганизация: ${data.organization}\rРегион: ${data.region}`;
    const server = emailjs.server.connect(config.settings);
    const result = config.emails.filter((elem) => {
        if (elem.region === data.region) {
            return elem;
        } 
    });
    console.log(result);
    if (result !== undefined && result !== null && result.length === 1) {
        server.send(
            {
                text: text,
                from: 'no reply <noreply@rmg-media.pro>',
                to: result[0].email,
                subject: 'Запрос с сайта'
            },
            (err, message) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(`Ошибка: ${err}`);
                }
                console.log(message);
                res.status(200).send(`Письмо отправлено: ${message}`);
            }
        );
    }
	
});

router.get('/sendmail', (req, res) => {
	res.send("It's work!");
});

module.exports = router;
