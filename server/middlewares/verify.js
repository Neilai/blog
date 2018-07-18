/**
 * Created by Neil
 * 2018-05-19 11:01
 */
import jwt from 'jsonwebtoken'
import thenifyAll from 'thenify-all'
import {secret} from '../config'

thenifyAll(jwt, {}, ['verify'])

export default async function (ctx, next) {
    const token = ctx.get('Authorization')
    try {
        await jwt.verify(token, secret)
    }
    catch (err) {
        ctx.throw(401, err)
    }
    await next()
}
