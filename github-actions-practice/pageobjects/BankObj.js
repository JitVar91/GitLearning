const {BankLogin} = require('./BankLogin.js');
const {BankTransfer} = require('./BankTransfer.js');
const {BankVerify} = require('./BankVerify.js');
const { BankVerifyBefore } = require('./BankVerifyBefore.js');
const { BankSecond } = require('./BankSecond.js');

class BankObj {

    constructor(page) {

        this.page = page;
        this.bankLogin = new BankLogin(this.page);
        this._bankTransfer = new BankTransfer(this.page);
        this._bankVerify=  new BankVerify(this.page,'13677');
        this._bankVerifyBefore = new BankVerifyBefore(this.page,'13677');
        this._bankSecond = new BankSecond(this.page,'13788');
    }

    get thisBankLogin() {
        return this.bankLogin;
    }  
    
    
        get bankTransfer() {
        return this._bankTransfer;
    }  

        get bankVerify() {
            return this._bankVerify;
        }

         get bankVerifyBefore() {
            return this._bankVerifyBefore;
        }

        get bankSecond() {
            return this._bankSecond;
        }   
}

module.exports = {BankObj};