import { test, expect } from '@playwright/test';

test.describe('ホームページ', () => {
  test('タイトルが正しく表示されること', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/GMNH Miyabi/);
  });

  test('ナビゲーションバーに主要なリンクが表示されていること', async ({ page }) => {
    await page.goto('/');
    
    // ロゴの表示を確認
    const logo = page.locator('a[href="/"]');
    await expect(logo).toBeVisible();
    
    // ナビゲーションリンクの存在を確認
    const navLinks = [
      { text: '商品一覧', href: '/products' },
      { text: 'カート', href: '/cart' },
      { text: 'ログイン', href: '/auth/signin' },
    ];

    for (const link of navLinks) {
      const navLink = page.locator(`a[href="${link.href}"]`, { hasText: link.text });
      await expect(navLink).toBeVisible();
    }
  });

  test('フッターが正しく表示されること', async ({ page }) => {
    await page.goto('/');
    
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // コピーライトの表示を確認
    await expect(footer).toContainText('© 2023 GMNH Miyabi. All rights reserved.');
  });
});
