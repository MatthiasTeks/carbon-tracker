import { test, expect } from '@playwright/test';
import * as argon2 from 'argon2';
import { closeDB, initDB } from './helpers';
import { clearDB } from '../../backend/src/db';
import UserService from '../../backend/src/services/user-service';

test.beforeAll(initDB);

test.beforeEach(async () => {
  await clearDB();
  await createUser();
});

test.afterAll(closeDB);

const email = 'user3@app.com';
const password = 'mysuperpassword';

async function createUser() {
  const hashedPassword = await argon2.hash(password);
  await UserService.create({ email, password });
}

test('can connect with correct credentials', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/login');
  await page.getByPlaceholder('carbone@gmail.com').fill(email);
  await page.getByPlaceholder('*******').fill(password);
  await page.getByRole('main').click({
    button: 'left'
  });
  await page.getByTestId('submit').click();
  await expect(page.getByRole('heading', { name: 'Bienvenue' })).toBeVisible()
});

test('cannot connect with WRONG credentials', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/login');
  await page.getByPlaceholder('carbone@gmail.com').fill(email);
  await page.getByPlaceholder('*******').fill('wrongPassword');
  await page.getByRole('main').click({
    button: 'left'
  });
  await page.getByTestId('submit').click();
  await expect(page.getByText('Vérifiez vos informations...')).toBeVisible()
});
