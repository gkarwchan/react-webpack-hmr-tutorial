import express from 'express';

const app = express();

app.use(express.static(path.resolve(process.cwd(), 'dist')));
const indexFile = path.join(__dirname, '../index.html');
app.get('/', (req, res) => {
    res.sendFile(indexFile);
});

export default app;