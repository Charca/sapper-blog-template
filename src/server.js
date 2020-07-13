import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import volleyball from 'volleyball';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
dotenv.config();

const { PORT = 3000, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka()
	.use(!dev ? volleyball.custom({ debug: true }) : volleyball)
	.use(helmet())
	.use(compression({ threshold: 0 }), sirv('static', { dev }), sapper.middleware())
	.listen(PORT, (_) => console.log(`Server started with config ${PORT}`));
