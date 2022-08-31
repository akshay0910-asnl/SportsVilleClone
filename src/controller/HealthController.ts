import { Router, Request, Response } from 'express'
const router = Router()

router.get('/', (_req: Request, _res: Response) => {
	_res.status(200).json({ message: 'All good' })
})

export default router
