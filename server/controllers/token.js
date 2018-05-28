/**
 * Created by Neil
 * 2018-05-19 10:59
 */
import jwt from 'jsonwebtoken'
import User from '../models/user'
import {
    secret
} from '../config'

class TokenControllers {

    async createToken(ctx) {

        const {
            username,
            password
        } = ctx.request.body


        console.log(ctx.request);
        const res = (await User.findUser(username))[0]
        if (res) {
            if (password === res.password) {
                const token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60// 一天
                }, secret)
                ctx.body = token
            }
            else {
                ctx.throw(401, '密码错误')
            }
        }
        else {
            ctx.throw(401, '用户名错误')
        }
    }

    checkToken(ctx) {
        ctx.body = '验证通过'
    }
}

export default new TokenControllers()

