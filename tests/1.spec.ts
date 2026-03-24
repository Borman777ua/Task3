
import { test } from "@playwright/test";
import { PageManager } from "../pageObjects/DochubPageObject/PageObjectManager";


// Scenario:
// 1. Open the login page. 
// 2. Enter an invalid email and password. 
// 3. Click the login button. 
// 4. Verify (Assert) that the appropriate authorization error message appears on the screen.


test.describe('Login functionality tests', () => {
    test('should display error message for invalid credentials', async ({ page }) => {
        await page.goto('');
        const pageManager = new PageManager(page);
        const unassignedHomePage = pageManager.UnassignedHomePage();
        await unassignedHomePage._proceedToSignInPage();

        const signInPage = pageManager.SignInPage();
        await signInPage._signInAction('invalid@example.com', 'wrongpassword');
        await signInPage._verifyAlertText('Error: Username and password entered did not match our records');
    })
})