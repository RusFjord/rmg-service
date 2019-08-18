const express = require('express');

const app = express();

app.listen(5555, () => {
	console.log('Сервер работает на порту 5555');
});
