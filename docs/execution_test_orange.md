# Journal d'exécution – Orange Demo
Date : 17-08-2025
Projet : qa-demo
SUT : https://opensource-demo.orangehrmlive.com/

## 1. Préparation de l'environnement
Création du projet Node.js :
  ```bash
  mkdir qa-demo ; cd qa-demo
  npm init -y
  npm i -D @playwright/test
  npx playwright install
  npx playwright test --init
```

Ajout des traces dans playwright.config.js :
```javascript
  use: {
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
```

-----------------------

## 2. Préparation de l'environnement ##
Arborescence du projet :
qa-demo/
  ├── package.json
  ├── node_modules/
  ├── playwright.config.js
  └── tests/
      └── testsorange.spec.js
  └── test-results/
      └── .last-run.json
  └── docs/
      └── execution_test_orange.md
      └── plan_de_test_orange.md
      └── resultats_de_test.md

---------------------

## 3. Cas de test automatisé

### LOGIN-001 – Login succès
Etapes : 
1) Ouvrir l'URL 
2) Saisir `Admin` / `admin123` 
3) Cliquer sur "Login"   

Résultat attendu : Redirection vers /dashboard + titre “Dashboard” affiché.

Script de testsorange.spec.js :
```Javascript
const { test, expect } = require('@playwright/test');

test('LOGIN-001 - Login succès', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();
});
```

### LOGIN-002 – Login échec
Etapes : 
1) Ouvrir l'URL 
2) Saisir `Admin` / `wrong_password` 
3) Cliquer sur "Login"   

Résultat attendu : Message “Invalid credentials” visible.

Script de testsorange.spec.js :
```Javascript
const { test, expect } = require('@playwright/test');

test('LOGIN-002 - Login échec', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('wrong_password');
  await page.getByRole('button', { name: 'Login' }).click();

  const error = page.getByText(/invalid credentials/i);
  await expect(error).toBeVisible();
});
```

### Texte-page - OrangeHRM
Etapes : 
1) Ouvrir l'URL    

Résultat attendu : Le titre de la page 'OrangeHRM' est affiché sur l'onglet

```javascript
//Test 3 - Texte page
test('Texte-page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await expect(page).toHaveTitle('OrangeHRM')
});
```

-----------------------

## 4. Commandes d'exécution

Lancer tous les tests:
```npx playwright test```

Lancer dans l'outil Playwright UI intéractif: 
```npx playwright test --ui```

Générer et ouvrir le rapport HTML:
```npx playwright show-report```

Générer une trace:
```npx playwright test --trace on```

-----------------------

## 5. Résultats observés

### Sur le terminal :
```bash
Running 9 tests using 3 workers
  9 passed (27.5s)
```

### Sur le navigateur : 
Cas succès → redirection vers Dashboard, en-tête affiché.
Cas échec → message “Invalid credentials” affiché.
Cas texte-page -> le titre de la page 'OrangHRM' doit être affiché

-----------------------

## Cas de test vs exécutions

| Cas de test (logique)                 | Navigateurs exécutés      | Nb d'exécutions |
|---------------------------------------|---------------------------|-----------------|
| Login valide (valid credentials)      | Chromium, Firefox, WebKit |       3         |
| Login invalide (invalid credentials)  | Chromium, Firefox, WebKit |       3         |
| Texte-page (OrangeHRM)                | Chromium, Firefox, WebKit |       3         |

Total : 3 cas de test, 9 exécutions.

-----------------------

## 6. Conclusion

LOGIN-001 : PASS 
LOGIN-002 : PASS 
Texte-page: PASS
