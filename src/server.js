let express = require('express'); //Se importa la dependencia
let app = express(); // se declara una App de express 
let personsRoute = require('./routes/person'); // se incluye el router de persons

let PORT = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor

//En esta linea se indica que se van a parsear peticiones con URLencoded (datos dentro del body)
//Este tiene el valor FALSE, por lo que no parsea objetos anidados
app.use(express.urlencoded({extended: false}));
// Linea para que la app de express use EJS como motor de vistas
app.set('view engine', 'ejs'); 
app.use(personsRoute); //Linea para indicar que se va a usar el router
/* Aplicación express especifica el directorio virtual '/assets'  ----> contenido estatico 
mapeado a ----> carpeta fisica '/public' */
app.use('/assets', express.static(__dirname + '/../public'));


app.listen(PORT,()=>{  //Levantar el server y ponerlo a la escucha
    console.log('escuchando en el puerto 3000');
});

