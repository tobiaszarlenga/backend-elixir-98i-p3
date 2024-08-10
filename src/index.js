import express from 'express';
import morgan from 'morgan';
import corse from 'cors';

// TODO: importar base de datos

console.clear();
console.log('inicializando servidor...');

// inicializar el servidor
const app = express();

// configurar los valores del servidor

const PORT = process.env.PORT || 3000;

// Middleware

app.use(morgan('dev'));
app.use(express.json());
app.use(corse());

// Rutas,(o endpoints)

// TODO: importar rutas

// loop del servidor
app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});
