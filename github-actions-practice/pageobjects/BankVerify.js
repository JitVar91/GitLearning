 const { test, expect } = require('@playwright/test');
 
 class BankVerify {
 
 
     constructor(page,accountC) {
 
         this.page = page;
         this.accountC = accountC; 
         this.title = page.getByRole('heading', { level: 1, name: 'Accounts Overview' });
         this.account1 = page.getByRole('link', { name: accountC });
         this.accountType = page.locator("[id='accountType']");
         this.accountid = page.locator("[id='accountId']");
         this.balance = page.locator("[id='balance']");
         this.availableBalance = page.locator("[id='availableBalance']");
         this.overview = page.locator("[href='overview.htm']");
 
 
 
 
     }
 
 
     async verifyAcc(amount1) {
         //console.log(await this.title.textContent());
         //await expect(await this.title).toBeVisible();
 
         await this.overview.click();
 
         await this.page.screenshot({ path: "Login.png" });
 
         await this.account1.click();
 
         await this.page.screenshot({ path: "AccountDetails.png" });

       await expect(this.accountType).toHaveText('CHECKING');


         console.log("*********** "+this.accountC+" ***********");
         await this.accountType.waitFor({ state: 'visible', timeout: 10000 });

         console.log("Account Type : " + await this.accountType.textContent());
        // expect(await this.accountType.textContent()).toEqual('CHECKING');
         console.log("Account id : " + await this.accountid.textContent());
         //console.log("Balance Amt : " + await this.balance.textContent());
 
         const textamount1 = await this.availableBalance.textContent()
         const amount2 = parseFloat(textamount1.replace(/[$ ]/g, ''));
         console.log("Available Balance Amt : " + await this.availableBalance.textContent());
         console.log("Available Balance Amt Absolute Value : " + amount2);
         
         expect(amount2).toEqual(amount1 - 100);
         console.log("I have verified that the available balance is correct post the transfer");
 
 
     }
 
 
 
 
 }
 
 module.exports = { BankVerify };