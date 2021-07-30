import express from 'express';
import config from './config/config';
import routes from './routes/routes';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes);

app.listen(config.port_app, () => console.log(`server listening on port ${config.port_app}`));
