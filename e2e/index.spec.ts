import { test, expect } from "@playwright/test";
import { beforeEach, describe } from "node:test";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


describe("TODO App", () => {

  beforeEach(async () => {
    await prisma.todo.deleteMany();
  });

  test.afterAll(async () => {
    await prisma.$disconnect();
  });
  
  // Check if TODO list is empty
  test('should have an empty list', async ({ page }) => {
    await expect(page.locator('li')).toHaveCount(0);
  });
  
  
  // Add new item to the TODO list
  test('should add a new item to the list', async ({ page }) => {
    await page.goto('/');
    await page.fill('input', 'do something');
    await page.keyboard.press('Enter');
    await expect(page.locator('li')).toHaveCount(1);

    // delete the iteam from the list to keep the list empty
    const deletButton = await page.getByText('Delete 🗑️').first();
    await deletButton.click();
    await expect(page.locator('li')).toHaveCount(0);
  });

  // Add a second item to the TODO list
  test('should add a second item to the list', async ({ page }) => {
    await page.waitForTimeout(4000);
    await page.goto('/');
    await page.fill('input', 'do something');
    await page.keyboard.press('Enter');
    await page.fill('input', 'do something else');
    await page.keyboard.press('Enter');
    await expect(page.locator('li')).toHaveCount(2);
    
    // delete the items from the list to keep the list empty
    const deleteButton1 = page.getByText('Delete 🗑️').first();
    const deleteButton2 = page.getByText('Delete 🗑️').last();
    await deleteButton1.click();
    await deleteButton2.click();
    await expect(page.locator('li')).toHaveCount(0);
  });
  
  // Delete item from the TODO list
  test('should delete an item from the list', async ({ page }) => {
    await page.waitForTimeout(6000);
    await page.goto('/');
    await page.fill('input', 'do something');
    await page.keyboard.press('Enter');
    await expect(page.locator('li')).toHaveCount(1);

    // delete the item from the list
    const deleteButton = await page.getByText('Delete 🗑️').first()
    await deleteButton.click();
    await expect(page.locator('li')).toHaveCount(0);
  });
  
  test("should navigate to index page and have correct title", async ({
    page,
  }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto("/");
    // The page should contain a title element with the text "TODO 📃"
    await expect(page.title()).resolves.toMatch("TODO 📃");
  });

});  

