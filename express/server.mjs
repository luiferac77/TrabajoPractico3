import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Esta es la página principal');
});

app.get('/profile', (req, res) => {
    const edad = req.query.edad;
    console.log(`La edad recibida es ${edad}`);
    res.send(`La edad recibida es ${edad}`);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en: http://localhost:${port}`);
});