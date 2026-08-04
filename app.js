import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';

import autoRouter from './src/routes/autoRouter.js';
import authRouter from './src/routes/authRouter.js';
import pageRouter from './src/routes/pageRouter.js';


const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.engine('handlebars', engine({

    helpers: {

        eq: (a, b) => a === b

    }

}));


app.set('view engine', 'handlebars');


app.set(
    'views',
    path.join(__dirname, 'src', 'views')
);



app.use(express.json());


app.use(express.urlencoded({
    extended: true
}));


app.use(session({

    secret: 'lecautos',

    resave: false,

    saveUninitialized: false,

    cookie: {
        maxAge: 1000 * 60 * 60
    }

}));


app.use(express.static(
    path.join(__dirname, 'src')
));

app.use("/", pageRouter);
app.use('/auth', authRouter);
app.use('/autos', autoRouter);

app.get('/', (req,res)=>{

    res.redirect('/autos');

});



app.listen(8085, ()=>{

    console.log(
        'Servidor iniciado en http://localhost:8085'
    );

});