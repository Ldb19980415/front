import { makeAutoObservable } from "mobx";
import {host_api} from './api'

class User {
  constructor() {
    makeAutoObservable(this);
  }
  isLogin = localStorage.getItem("isLogin");
  token = "";
  username = localStorage.getItem('username')

  async login(params: any) {
    let result = await this.launch("post",'auth_login',params)
    //调用登录的接口
    if(result.success){
      this.isLogin = "true"
      this.username = result.data.username
      localStorage.setItem("username",result.data.username)
      localStorage.setItem("isLogin",result.success)
    }
  }
  logout() {
    // 调用退出接口
    this.isLogin = "false";
    delete localStorage.isLogin;
    delete localStorage.username;
  }

  // 使用fetch发送请求
  async launch(method: string, api: string, data?: any, useFormData?: boolean) {
    let requestInit: RequestInit = {
      method: method,
      cache: 'no-cache',
      headers: {
        Authorization: this.token,    //直接没次去localhost里面读token保证最新的token
      },
    }
    let url = host_api[api]
    method = method.toLocaleUpperCase()
    if(method === 'GET' && data){
      url = handleGetUrl(url,data)
    }
    if( method === 'POST' && data){
      if(useFormData){
        requestInit['body'] = json2formdata(data)
      }else{
        requestInit['body'] = JSON.stringify(data)
      }
    }
    const result = await fetch(url,requestInit)
    return result.json()
  }
}

const json2formdata = (params:any) =>{
  const fromData = new FormData()
  for (let key in params){
    fromData.append(key,params[key])
  }
  return fromData
}

const handleGetUrl = (url:string,params:any) => {
  url += '?'
  for(let key in params){
    url = url + key + '=' + params[key] + '&'
  }
  url = url.slice(0,-1)
  return url

}
export default new User();
