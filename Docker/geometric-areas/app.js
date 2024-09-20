import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());



app.post('/volume', (req, res) => {
    const { shape, dimensions } = req.body;
    let volume;

    switch (shape) {
        case 'cube':
            volume = Math.pow(dimensions.side, 3);
            break;
        case 'sphere':
            volume = (4 / 3) * Math.PI * Math.pow(dimensions.radius, 3);
            break;
        case 'cylinder':
            volume = Math.PI * Math.pow(dimensions.radius, 2) * dimensions.height;
            break;
        default:
            return res.status(400).send('Forma no válida');
    }

    res.json({ volume });
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
