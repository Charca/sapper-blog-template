import sirv from 'sirv'
import compression from 'compression'
import * as sapper from '@sapper/server'
import polka from 'polka'
import helmet from 'helmet'
import volleyball from 'volleyball'

const { PORT, NODE_ENV } = process.env || 5000

const dev = NODE_ENV === 'development'

const app = polka()

if (dev) {
    app
	.use(!dev ? volleyball.custom({ debug: true }) : volleyball)
	.use(helmet())
	.use(compression({ threshold: 0 }), sirv('static', { dev }), sapper.middleware())
	.listen(PORT, (err) => {
		if (err) {
			console.log('error', err)
			throw err
		}
		// else
		console.log(`🎈 Server listening on port ${PORT}`)
	})
} else {
  app.use(sapper.middleware())
}

export default app
