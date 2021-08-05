import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { signUpEndpoint } from './endpoints/user/signUp';

const app = express();
app.use(cors({credentials: true, origin: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post('/user/signup', signUpEndpoint);

export default app;
