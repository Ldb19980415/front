import { makeAutoObservable } from "mobx";
class User {
  //public implements UserInterface

  constructor() {
    makeAutoObservable(this);
  }
  isLogin = false;

  login() {
    //调用登录的接口
    this.isLogin = true;
  }
  logout() {
    // 调用退出接口
    this.isLogin = false;
  }
}

export default new User();
