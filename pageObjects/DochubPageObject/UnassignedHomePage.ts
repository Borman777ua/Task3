import { expect, Page } from "@playwright/test";
import { HelperBase } from "./PageHelper";

export class UnassignedHomePage extends HelperBase {
    constructor(page: Page) {
        super(page);
    }

readonly signInButton = this.page.locator('a[href="https://dochub.com/sign-in"]')


async _proceedToSignInPage(){
    await this.signInButton.click()
}
}
