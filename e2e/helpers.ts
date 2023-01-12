import { test, expect } from '@playwright/test';

/**
 * TODO: Expand parameters to allow for configuration of viewports.
 */
interface VisualRegressionTestParams {
  filename: `${string}.png`;
}

export const createVisualRegressionTest = ({ filename }: VisualRegressionTestParams) => {
  if (process.env.CI === 'true') {
    test('renders correctly', async ({ page }) => {
      await page.goto('/');
      await expect(page).toHaveScreenshot(filename);
    });
  }
};
