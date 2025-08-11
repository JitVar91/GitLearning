const { test, expect } = require('@playwright/test');

class BankVerifyBefore {


    constructor(page, accountC) {

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


    async verifyAccBefore() {
        //console.log(await this.title.textContent());
        //await expect(await this.title).toBeVisible();


  console.log('🔍 Navigating to account overview...');
  await Promise.all([
    this.page.waitForLoadState('networkidle'),
    this.overview.click()
  ]);

    await this.account1.click();

  console.log('⏳ Waiting for account type element to be attached...');
  await this.accountType.waitFor({ state: 'attached', timeout: 10000 });

  console.log('📦 Ensuring account type is visible and scrolled into view...');
  await this.accountType.scrollIntoViewIfNeeded();
  await expect(this.accountType).toBeVisible();

  console.log('🧪 Validating account type text...');
  await expect(this.accountType).toHaveText('CHECKING', { timeout: 10000 });

  console.log('✅ Account type verified successfully.');




      //  await this.overview.click();
       // await this.accountType.waitFor({ state: 'visible', timeout: 10000 });


       // await expect(this.accountType).toHaveText('CHECKING');



        await this.page.screenshot({ path: "Login.png" });

      

        await this.page.screenshot({ path: "AccountDetails.png" });

        console.log("*********** "+this.accountC+" ***********");
        console.log("Account Type : " + await this.accountType.textContent());
        //expect(await this.accountType.textContent()).toEqual('CHECKING');
        console.log("Account id : " + await this.accountid.textContent());
        console.log("Available Balance Amt Before : " + await this.availableBalance.textContent());

        const textamount1 = await this.availableBalance.textContent()
        const amount1 = parseFloat(textamount1.replace(/[$ ]/g, ''));
        console.log("Available Balance Amt Absolute Value : " + amount1);
       
        return amount1;
  


    }




}

module.exports = { BankVerifyBefore };