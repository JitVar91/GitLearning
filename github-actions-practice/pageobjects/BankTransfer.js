const { test, expect } = require('@playwright/test');
class BankTransfer {

   constructor(page) {
    this.page =page;
    this.transferButton = page.locator("ul li a[href$='transfer.htm']");

    this.amountInput = page.locator("[id='amount']");
    this.accountname = page.locator("[id='toAccountId']");
    this.transferConfirm = page.getByRole("button", { name: 'Transfer' });

    this.transferMessage = page.locator("div[id='showResult'] h1[class='title']");
   }

   async TransferD(amt,accselect)
    {
        await this.transferButton.click();
        await this.amountInput.fill(amt);
        await this.accountname.selectOption(accselect);
        await this.transferConfirm.click();
        await this.page.waitForLoadState('networkidle');

        expect(await this.transferMessage.textContent()).toContain('Transfer Complete');
        console.log(await this.transferMessage.textContent());
        
    }
}

module.exports = { BankTransfer };


