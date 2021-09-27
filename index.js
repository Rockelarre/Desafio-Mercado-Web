// Importar módulos necesarios
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.listen(3000,()=>{
    console.log(`Server running on port 3000 and PID: ${process.pid}`)
})

app.engine(
    'handlebars',
    exphbs({
        layoutsDir: __dirname + '/views',
        partialsDir: __dirname + '/views/componentes/'
    })
)

app.set('view engine','handlebars');

// Middleware que disponibiliza Bootstrap
app.use('/css', express.static(__dirname +
    '/node_modules/bootstrap/dist/css'));

// Middleware que disponibiliza JQuery
app.use('/jquery', express.static(__dirname +
    '/node_modules/jquery/dist'))

// Ruta raíz
app.get('/',(req,res)=>{
    res.render('Dashboard',{
        layout:'Dashboard',
        productos: [
            'banana',
            'cebollas',
            'lechuga',
            'papas',
            'pimenton',
            'tomate',
        ]
    })
})

// Directorio publico
app.use(express.static('imagenes'));
app.use(express.static('css'));