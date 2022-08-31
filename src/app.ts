import environment from '@config/index'
import express, { Request, Response, NextFunction, Application } from 'express'
import cookieParser from 'cookie-parser'
import createError from 'http-errors'
import healthRouter from '@controller/HealthController'

const app: Application = express()
const PORT = process.env['PORT'] || 8000

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cookieParser())

//routes
app.use('/health', healthRouter)

// catch 404 and forward to error handler
app.use(function (_req: Request, _res: Response, _next: NextFunction) {
	_next(createError(404))
})

app.use(function (
	err: Error,
	_req: Request,
	_res: Response,
	_next: NextFunction
) {
	// set locals, only providing error in development
	_res.locals['message'] = err.message
	_res.locals['error'] = environment === 'development' ? err : {}
	_res.status(500).send({ message: err.message })
})

app.listen(PORT, () =>{ console.log(`Server Running on PORT ${PORT}`)})
