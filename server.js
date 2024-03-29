const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi');

requireDir('./src/models');

//const Product = mongoose.model('Product');

//rota
app.use('/api', require('./src/routes'));

app.listen(3001);