/**
 * Created by Neil
 * 2018-05-19 10:55
 */
import Router from 'koa-router'
import {baseApi} from '../config'
import ArticleController from '../controllers/article'
import verify from '../middlewares/verify'
import check from '../middlewares/check'

const api = 'article'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', verify, ArticleController.addArticle)
router.put('/update/:id', verify, check, ArticleController.updateArticle)
router.put('/publish/:id', verify, check, ArticleController.publishArticle)
router.get('/', ArticleController.getArticleList)
router.get('/:id', ArticleController.getOneArticle)
router.delete('/:id', verify, ArticleController.deleteArticle)

module.exports = router