const { test, expect } = require('@playwright/test');

const { BankObj } = require('./pageobjects/BankObj');




test('Transfer Funds', async ({ page }) => {

     //Login


     const bankObj = new BankObj(page);
     const bankLogin = bankObj.thisBankLogin;
     await bankLogin.OpenLink();
     await bankLogin.LogData('Barry1', 'password123');


     /// Verify Before Transfer

     const bankVerifyBefore = bankObj.bankVerifyBefore;
     const amount1 = await bankVerifyBefore.verifyAccBefore();
     //const amount1 = await bankVerifyBefore.verifyAccBefore();


  


     /// TRansfer Funds
     const bankTransfer = bankObj.bankTransfer;
     await bankTransfer.TransferD('100', '13788');


     await page.waitForLoadState('networkidle');


     //Verify Post Transfer
     const bankVerify = bankObj.bankVerify;
     await bankVerify.verifyAcc(amount1);





     // Second Account value Deposit

     const bankSecond = bankObj.bankSecond;
     await bankSecond.verifyAccSecond();


});