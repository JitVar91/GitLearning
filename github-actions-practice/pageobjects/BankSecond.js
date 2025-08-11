const { test, expect } = require('@playwright/test');

class BankSecond {


    constructor(page, accountS) {

        this.page = page;
        this.accountS = accountS; 
        this.title = page.getByRole('heading', { level: 1, name: 'Accounts Overview' });
        this.account2 = page.getByRole('link', { name: accountS });
        this.accountType = page.locator("[id='accountType']");
        this.accountid = page.locator("[id='accountId']");
        this.balance = page.locator("[id='balance']");
        this.availableBalance = page.locator("[id='availableBalance']");
        this.overview = page.locator("[href='overview.htm']");




    }


    async verifyAccSecond() {


        await this.overview.click();

        await this.page.screenshot({ path: "BankSecond.png" });

        await this.account2.click();

        await this.page.screenshot({ path: "AccountDetails.png" });

        console.log("*********** "+this.accountS+" ***********");
        await this.accountType.waitFor({ state: 'visible', timeout: 10000 });

        await expect(this.accountType).toHaveText('SAVINGS');

        console.log("Account Type : " + await this.accountType.textContent());
        expect(await this.accountType.textContent()).toEqual('SAVINGS');
        console.log("Account id : " + await this.accountid.textContent());
        console.log("Available Balance Amt : " + await this.availableBalance.textContent());

     
        console.log("I have verified Second");


    }




}

module.exports = { BankSecond };