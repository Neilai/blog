/**
 * Created by Neil
 * 2018-05-19 10:56
 */
import Router from 'koa-router'
import {baseApi} from '../config'
import TokenController from '../controllers/token'
import verify from '../middlewares/verify'

const api = 'token'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', TokenController.createToken)
router.get('/check', verify, TokenController.checkToken)

module.exports = router