import { expect, Page } from "@playwright/test";
import { HelperBase } from "./PageHelper";

export class SignInPage extends HelperBase {
    constructor(page: Page) {
        super(page);
    }

    readonly email = this.page.locator('#email')
    readonly password = this.page.locator('input[autocomplete="current-password new-password"]')
    readonly submitButton = this.page.locator('#dh-email-login-btn')


    async _signInAction(email: string, password: string){
        await this._verifyUrl("https://dochub.com/sign-in");
        await this.email.fill(email)
        await this.password.fill(password)
        await this.submitButton.click()
    }
}
