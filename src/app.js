const express = require ('express');
const cors = require ('cors');
const app = express ();

app.use(express.json());
app.use(cors());

//importar rutas
const userRoutes = require('/routers/user.routers');
const authRoutes = require('/routers/auth.routers');
const projectRoutes = require('/routers/project.routers');

app.use('/api/v1', userRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', projectRoutes);

module.exports = app;
