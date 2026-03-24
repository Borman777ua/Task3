import { Page } from "@playwright/test"
import { UnassignedHomePage } from "./UnassignedHomePage"
import { SignInPage } from "./SignInPage"


export class PageManager {
    private readonly page: Page
    private readonly unassignedHomePage: UnassignedHomePage
    private readonly signInPage: SignInPage

    constructor(page: Page) {
        this.page = page
        this.unassignedHomePage = new UnassignedHomePage(this.page)
        this.signInPage = new SignInPage(this.page)
    }


    UnassignedHomePage() {
        return this.unassignedHomePage
    }

    SignInPage() {
        return this.signInPage
    }
}