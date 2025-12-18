import { test, expect } from '@playwright/test';

//Open the TodoMVC page.
test('open todo', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

//Add a new todo: "Learn Playwright".
    const todoInput = page.getByPlaceholder('What needs to be done?');
    await todoInput.fill('Learn Playwright');
    await todoInput.press('Enter');

//Verify that this todo appears in the list.
    await expect(page.getByText('Learn Playwright')).toBeVisible();
    
//Add a second todo: "Write tests".
    await todoInput.fill('Write Tests');
    await todoInput.press('Enter');

//Verify that there are 2 items in the list.
    const toDos = page.locator('.todo-list li');
    await expect(toDos).toHaveCount(2);

//Mark "Learn Playwright" as completed & Verify The “Completed” filter shows 1 completed item.
    await page.locator('.todo-list li').filter({ hasText: 'Learn Playwright' }).locator('.toggle').check();
    await page.getByRole('link', { name: 'Completed' }).click();
    await expect(toDos).toHaveCount(1);
    await expect(page.getByText('Learn Playwright')).toBeVisible();

//Verify that:The “Active” filter shows only "Write tests".
    await page.getByRole('link', { name: 'Active' }).click();
    await expect(toDos).toHaveCount(1);
    await expect(page.getByText('Write Tests')).toBeVisible();

//Clear completed items and verify the list updates correctly.
    await page.getByRole('link', { name: 'All' }).click();
    await page.getByRole('button', { name: 'Clear completed' }).click();
    await expect(toDos).toHaveCount(1);
    await expect(page.getByText('Write Tests')).toBeVisible();
});