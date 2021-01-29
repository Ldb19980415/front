import JSEncrypt from "jsencrypt";

const encryptPassword = (password) => {
    var encryptor = new JSEncrypt(); // 创建加密对象实例
    //之前ssl生成的公钥，复制的时候要小心不要有空格
    var pubKey = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1QQRl0HlrVv6kGqhgonD6A9SU6ZJpnEN+Q0blT/ue6Ndt97WRfxtSAs0QoquTreaDtfC4RRX4o+CU6BTuHLUm+eSvxZS9TzbwoYZq7ObbQAZAY+SYDgAA5PHf1wNN20dGMFFgVS/y0ZWvv1UNa2laEz0I8Vmr5ZlzIn88GkmSiQIDAQAB-----END PUBLIC KEY-----'
    encryptor.setPublicKey(pubKey); //设置公钥
    var rsaPassWord = encryptor.encrypt(password); // 对内容进行加密
    return rsaPassWord;
};

export default {
    encryptPassword
}