/**
 * Created by Neil
 * 2018-05-19 10:56
 */

import Router from 'koa-router'
import {baseApi} from '../config'
import TagController from '../controllers/tag'
import verify from '../middlewares/verify'

const api = 'tag'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.put('/:id', verify, TagController.updateTag)

module.exports = router