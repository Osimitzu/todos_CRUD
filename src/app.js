const express = require('express'); 
const db = require('./utils/database');
require('dotenv').config();

const todosRoutes = require('./routes/todos.routes');

const PORT = process.env.PORT || 8000; 

db.authenticate()
    .then(() => console.log('Base de datos conectada (/OoO)/'))
    .catch((err) => console.log(err));

db.sync()
    .then(() => console.log('Base de datos sincronizada (/OoO)/'))
    .catch((err) => console.log(err));    

const app = (express());
app.use(express.json()); 

app.get('/', async (req, res) => {
    res.send('Servidor OK');
});

app.use(todosRoutes); 

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT} (/OoO)/`);
});
