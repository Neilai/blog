/**
 * Created by Neil
 * 2018-05-19 11:01
 */
export default async function (ctx, next) {
    const {title, tags, content, isPublished} = ctx.request.body
    if (isPublished) {
        if (tags === '' || title === '') {
            ctx.throw(400, '标题或者标签未设置！')
        }
        else {
            const pattern = /<!-- more -->/i
            if (!pattern.test(content)) {
                ctx.throw(400, '文章没有设置摘要分界！')
            }
        }
        await next()
    }
    else {
        await next()
    }
}
