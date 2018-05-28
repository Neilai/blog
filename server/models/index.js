/**
 * Created by Neil
 * 2018-05-19 11:26
 */
import mysql from 'mysql'
import fs from 'fs'
import path from 'path'
import {db} from '../config/index'

const sqlSource = fs.readFileSync('../utils/blogdb.sql', 'utf-8')
const init = mysql.createConnection(db)
init.connect()
init.query(sqlSource)
init.end()
