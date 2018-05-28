/**
 * Created by Neil
 * 2018-05-19 10:59
 */

import query from '../utils/query'
import escape from '../utils/escape'

class Tags {
    async updateTag(id, tags) {
        return await query(escape`UPDATE ARTICLE SET tags=${tags} WHERE id=${id}`)
    }
}

export default new Tags()
