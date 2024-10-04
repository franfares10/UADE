const express = require('express');
const dotenv = require('dotenv');
const swagger = require('swagger-ui-express');

const {
    sequelize
} = require('./db/db');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('Welcome to the server');
});

app.on('error', (err) => {
    console.log('Server error: ', err);
});

app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));
app.use('/api/posts', require('./routes/posts'));

app.use('/api-docs', swagger.serve, swagger.setup(require('./swagger.json')));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT || 3000}`);
});

sequelize.authenticate()
    .then(() => {
        console.log('Database connection established!');
    })
    .catch(err => {
        console.log('Error: ', err);
    });