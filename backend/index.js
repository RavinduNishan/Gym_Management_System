import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Hello World!');
});


mongoose
.connect(mongoDBURL)
.then(() => {
    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log('not Connected  MongoDB');
    console.error(err);
});