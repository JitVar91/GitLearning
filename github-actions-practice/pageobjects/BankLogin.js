class BankLogin{


    constructor(page){

        this.page = page;
        this.User = page.locator('input[name="username"]')
        this.Pass = page.locator('input[name="password"]');
        this.LogButton = page.getByRole('button', { name: 'Log In' });

    }


    async OpenLink()
    {
        await this.page.goto("https://parabank.parasoft.com/parabank/index.html");
    }

    async LogData(user1,pass1)
    {
        await this.User.fill(user1);
        await this.Pass.fill(pass1);
        await this.LogButton.click();
    }
        
}

module.exports = {BankLogin};


