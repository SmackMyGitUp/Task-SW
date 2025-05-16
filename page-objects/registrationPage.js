export class RegistrationPage {

    constructor(page){
        this.page = page;
        this.regButton = page.getByRole('button', { name: 'Register' });
        this.username = page.locator('input[name="username"]');
        this.email = page.locator('input[name="email"]');
        this.password = page.locator('input[name="password"]');
        this.confirmPassword = page.locator('input[name="confirmPassword"]');
    }

    async clickRegisterBtn(){
        await this.regButton.click(); 
    }
}