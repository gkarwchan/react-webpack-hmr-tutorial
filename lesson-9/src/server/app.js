import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve(__dirname, '../../', 'dist')));
const indexFile = path.join(__dirname, '../public/index.html');
app.get('/', (req, res) => {
    res.sendFile(indexFile);
});

const port = process.env.PORT || 3000;

app.listen(port);

