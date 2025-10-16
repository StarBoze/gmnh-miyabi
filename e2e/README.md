# E2E テスト

このディレクトリには、GMNH Miyabi アプリケーションのエンドツーエンドテストが含まれています。

## テストの実行方法

### ローカルでの実行

1. 依存関係をインストール:
   ```bash
   npm install
   npx playwright install
   ```

2. 開発サーバーを起動:
   ```bash
   npm run dev
   ```

3. 別のターミナルでテストを実行:
   ```bash
   npx playwright test
   ```

### ヘッドレスモードで実行
```bash
npx playwright test --headed
```

### 特定のブラウザで実行
```bash
npx playwright test --project=chromium
# または
npx playwright test --project=firefox
# または
npx playwright test --project=webkit
```

### デバッグモードで実行
```bash
npx playwright test --debug
```

## テストの構成

- `e2e/tests/` - テストファイル
- `e2e/pages/` - ページオブジェクトモデル
- `e2e/fixtures/` - テストフィクスチャ
- `e2e/utils/` - ユーティリティ関数

## テストの書き方

新しいテストケースを追加する場合は、`e2e/tests/` ディレクトリに新しいテストファイルを作成してください。

例:
```typescript
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('ホームページ', () => {
  test('タイトルが正しく表示されること', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(page).toHaveTitle(/GMNH Miyabi/);
  });
});
```

## ベストプラクティス

1. ページオブジェクトパターンを使用して、UIの変更に強いテストを書く
2. テストは独立して実行できるようにする
3. テストデータはフィクスチャを使用して管理する
4. アサーションは明確で具体的に行う
5. テストが失敗した場合に分かりやすいエラーメッセージを表示する

## トラブルシューティング

- テストが失敗した場合、`test.only` を使用して特定のテストのみを実行できます
- `--debug` フラグを使用して、テストの実行をステップごとに確認できます
- テストレポートは `playwright-report/` ディレクトリに生成されます

## CI/CD 統合

GitHub Actions を使用して、プルリクエストごとに自動的にテストが実行されます。
テスト結果は GitHub Actions の「Actions」タブで確認できます。
