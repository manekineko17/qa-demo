const { test, expect } = require('@playwright/test');

//Test 1 - Login succès
test('LOGIN-001 - Login succès', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();
});

//Test 2 - Login échec
test('LOGIN-002 - Login échec', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('wrong_pssword');
  await page.getByRole('button', { name: 'Login' }).click();

  const error = page.getByText(/invalid credentials/i);
  await expect(error).toBeVisible();
});

//Test 3 - Texte page
test('Texte-page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await expect(page).toHaveTitle('OrangeHRM')
});

//Test 4 - Texte page échec
test('Texte-page-echec', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await expect(page).toHaveTitle('Orange')
});


