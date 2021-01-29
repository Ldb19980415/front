import { makeAutoObservable } from "mobx";

class User {
  constructor() {
    makeAutoObservable(this);
  }
  isLogin = true;

  login(params: any) {
    //调用登录的接口
    if (params.username === "admin" && params.password === "123456") {
      this.isLogin = true;
      return true;
    }
    return false;
  }
  logout() {
    // 调用退出接口
    this.isLogin = false;
  }
}

export default new User();
