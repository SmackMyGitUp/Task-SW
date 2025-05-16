import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../page-objects/registrationPage';

test.beforeEach(async ({page})=>{
    await page.goto('https://auth-home-task.vercel.app/register');
})

test('Successful registration', async ({ page }) => {
  let regPage = new RegistrationPage(page);
  await regPage.username.fill('asd');
  await regPage.email.fill('asdf@test.com');
  await regPage.password.fill('Asdf1234');
  await regPage.confirmPassword.fill('Asdf1234');
  await regPage.clickRegisterBtn();
  await expect(page.getByText('You have registered successfully!')).toBeVisible();
  await page.close();
});