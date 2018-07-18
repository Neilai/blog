/**
 * Created by Neil
 * 2018-05-19 10:59
 */
import query from '../utils/query'

class Introductions {
    async getIntroductions(ctx) {
        console.log("!!!!");

        ctx.body= await query(`SELECT id,title,tags,publishTime FROM ARTICLE  ORDER BY publishTime DESC`)
    }
}

export default new Introductions()
