let host = ''
if (process.env.NODE_ENV == 'production') {
    host = 'http://39.98.146.215:80/api'
}

const host_api = {
    auth_login: `${host}/auth/login`, // 登录,post 
}


export {
    host_api,
    host
}