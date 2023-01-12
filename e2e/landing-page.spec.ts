import { test, expect } from '@playwright/test';
import { createVisualRegressionTest } from './helpers';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Create Next App/);
});

createVisualRegressionTest({ filename: 'landing-page.png' });
