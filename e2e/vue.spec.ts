import { test, expect } from '@playwright/test'

test('visits the app root url and loads the map', async ({ page }) => {
  await page.goto('/')

  // 等待 ArcGIS MapView 渲染完成（esri-view-root 是 ArcGIS 渲染的根容器）
  const mapContainer = page.locator('.size-full .esri-view-root')
  await expect(mapContainer).toBeVisible({ timeout: 15000 })
})

test('displays not found page for invalid url', async ({ page }) => {
  await page.goto('/#/nonexistent-page')

  await expect(page.locator('.not-found .title')).toHaveText('404')
  await expect(page.locator('.not-found .message')).toHaveText('抱歉，你访问的页面不存在。')
})
