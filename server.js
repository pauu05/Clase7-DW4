import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { postRoutes } from "./routes/post.js";
import dotenv from "dotenv";
dotenv.config();

const app = express ()
const PORT = 8080;
let DB = process.env.DB;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/post', postRoutes);

mongoose.connect(DB)
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(error => console.error('Error al conectar a MongoDB:', error));

app.listen(PORT, () =>{
console.log(`Server corriendo en http://localhost:${PORT}/api/post`)
})