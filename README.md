# Dochub Playwright Tests

This repository contains Playwright end-to-end tests written in TypeScript.

## Tools used

- Node.js and npm
- Playwright Test (Playwright + Playwright Test Runner)
- TypeScript

## Install dependencies

Open a bash terminal in the project root (Windows: Git Bash, WSL, or bash.exe) and run:

```bash
npm install
# install Playwright browsers
npx playwright install
# If running in CI (or to match the project's GitHub Actions), install with dependencies:
npx playwright install --with-deps
```

If the project uses a project-specific script to install browsers, run that instead (for example, `npm run install:browsers`).

## Run tests locally

Run all tests:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/example.spec.ts
```

Run tests headed (non-headless) for debugging:

```bash
npx playwright test --headed
```

Open Playwright test runner UI (if a script exists in package.json):

```bash
npm run openUI

## CI / GitHub Actions and reporting

- A GitHub Actions workflow is included at `.github/workflows/playwright.yml` and supports manual runs from the Actions UI (`workflow_dispatch`).
- The workflow installs dependencies and Playwright browsers and runs tests with the Playwright HTML reporter.
- The workflow uploads the generated Playwright HTML report (`playwright-report/`) as an artifact you can download from the run.
```

## Additional notes

- The tests are written in TypeScript; if you edit source files ensure the TypeScript compiler or your editor types are satisfied.
- CI environments may skip cookie consent handling (see `HelperBase._handleWithCookies`).
- If you encounter issues with browsers not found after `npx playwright install`, try reinstalling dependencies or consult Playwright docs: https://playwright.dev

