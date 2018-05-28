/**
 * Created by Neil
 * 2018-05-19 10:56
 */
import Router from 'koa-router'
import {baseApi} from '../config'
import IntroController from '../controllers/introduction'

const api = 'introduction'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.get('/', IntroController.getIntroductions)

module.exports = router