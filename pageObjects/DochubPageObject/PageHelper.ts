import { Locator, Page, expect } from "@playwright/test";


export class HelperBase {
    readonly page : Page 
    readonly alert : Locator

    constructor (page: Page){
    this.page = page 
    this.alert = this.page.getByRole('alert');

}

 async _verifyUrl(url : string){
    await expect(this.page).toHaveURL(url)
 }

async _verifyAlertText(text: string) {
  await expect(this.alert).toBeVisible();                  
  await expect(this.alert).toContainText(text);          
}
}   