const express = require('express');
const cors = require('cors');

const sendmail = require('./routes/sendmail');
const page404 = require('./routes/page404');

const app = express();
app.use(express.json());

app.use('/api_v1', cors(), sendmail);

app.use(page404);

app.listen(5555, () => {
	console.log('Сервер работает на порту 5555');
});
