let host = ''
if (process.env.NODE_ENV == 'production') {
    host = 'http://39.98.146.215:80/api'
}

const host_api = {
    auth_login: `${host}/auth/login`, // 登录,post 
    sunjie_search: `${host}/sunjie/search`, // 查询,get 
    sunjie_create: `${host}/sunjie/create`, // 新建一条记录,post 
}


export {
    host_api,
    host
}