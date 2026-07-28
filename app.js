import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

import autoRouter from './src/routes/autoRouter.js';
import authRouter from './src/routes/authRouter.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src', 'views'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.redirect('autos');
});

app.use('/auth', authRouter);
app.use('/autos', autoRouter);

app.listen(8085, () => {
    console.log('Servidor iniciado en http://localhost:8085');
});
