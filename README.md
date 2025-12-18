## Playwright Take-Home Assignment – Surgimate (SDET)
This repository contains an automated UI test implemented using Playwright Test Runner as part of the Surgimate – 2nd Round (SDET) Take-Home Assessment.

### Node.js Version Used

* **Node.js:** v20.18.0

### Project Description

This project contains an automated UI test written using **Playwright Test Runner**.
The test validates core functionality of the **TodoMVC demo application**.

Application under test:
[https://demo.playwright.dev/todomvc](https://demo.playwright.dev/todomvc)

### Setup Instructions
#### Install dependencies

npm init playwright@latest

### Run Tests
#### Run all tests (headless)

```bash
npx playwright test
```

#### Run the Todo test in headed mode

```bash
npx playwright test tests/todo.spec.js --headed
```

---

### Test Coverage

The test performs the following validations:

* Adds a todo item: **“Learn Playwright”**
* Adds a second todo item: **“Write tests”**
* Verifies two todos are present
* Marks **“Learn Playwright”** as completed
* Verifies **Completed** and **Active** filters
* Clears completed todos and verifies list updates

---

### AI Usage

* **AI / Cursor:** Not used

---

### Notes

* Uses Playwright’s built-in `expect` assertions
* Uses user-centric locators (`getByRole`, `getByPlaceholder`)
* No hard waits are used


---



