import { makeAutoObservable } from "mobx";

class User {
  constructor() {
    makeAutoObservable(this);
  }
  isLogin = localStorage.getItem('isLogin');

  login(params: any) {
    //调用登录的接口
    if (params.username === "admin" && params.password === "123456") {
      this.isLogin = 'true';
      localStorage.setItem('isLogin','true')
      return true;
    }
    return false;
  }
  logout() {
    // 调用退出接口
    this.isLogin = 'false';
    delete localStorage.isLogin
  }
}

export default new User();
