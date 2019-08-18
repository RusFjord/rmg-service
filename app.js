const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());


app.listen(5555, () => {
	console.log('Сервер работает на порту 5555');
});
