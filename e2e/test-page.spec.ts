import { test, expect } from '@playwright/test';

test('renders correctly', async ({ page }) => {
  await page.goto('/test');
  await expect(page).toHaveScreenshot('test.png');
});
