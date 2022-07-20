const express = require ('express')
const cors = require ('cors');
const server = require ('http');
const { uuidV4 } = require ('uuid');

const app = express();
const serve = server.Server(app);
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/join', (req, res) => {
    res.send({ link: uuidV4 });
});

serve.listen(port, () => {
    console.log(`Listening on the port ${port}`);
}).on('error', e => {
    console.error(e);
});