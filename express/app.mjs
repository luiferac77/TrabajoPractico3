import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Página de inicio');
});

app.get('/data', (req, res) => {
    res.send('Datos recibidos')
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Perfil de usuario con ID: ${userId}`);
});

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Resultado para la busquda: ${query}`);
});

app.get('/filter', (req, res) => {
const {type, minPrice, maxPrice} = req.query;
res.send(`Fltrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}`);
});

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});