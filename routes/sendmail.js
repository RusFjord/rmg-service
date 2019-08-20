const router = require('express').Router();
const nodeMailer = require('nodemailer');

router.post('/sendmail', (req, res) => {
    const data = req.body;
    console.log(data);
    let text = `Получено обращение с сайта\rИмя: ${data.name}\rТелефон: ${data.phone}\rЭл. почта: ${data.email}\rОрганизация: ${data.organization}`;

    let transporter = nodeMailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            login: 'teocharmillion@yandex.ru',
            pass: 'Fyfcnfcbz.2012'
        }
    });

    let mailOption = {
        from:'teocharmillion@yandex.ru',
        to: 'f.endovitskiy@ulteam8.ru',
        subject: 'Запрос с сайта',
        text: text
    };

    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            console.log(error);
            res.send(`Ошибка: ${error}`);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.send('Письмо отправлено!');
        });
});

router.get('/sendmail', (req, res) => {
    res.send("It's work!");
});

module.exports = router;