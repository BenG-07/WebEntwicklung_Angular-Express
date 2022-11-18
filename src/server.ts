import { Request, Response } from 'express';
import * as os from 'os';

const express = require('express');
const app = express();
const port = 4200;

app.use('/', express.static('dist/web-entwicklung-angular-express/'));
app.use('/home', express.static('dist/web-entwicklung-angular-express/'));

app.listen(port, () => {
    console.log('app started');
})

app.get('/stats', (request: Request, response: Response) => {
    response.status(200).json({
        'hostname': os.hostname(),
        'cpus': os.cpus(), 
        'uptime': process.uptime(), 
        'total memory': os.totalmem() 
    })
});
