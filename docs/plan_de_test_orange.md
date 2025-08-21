
## Plan de test – OrangeHRM ##
Date : 17-08-2025
Objectif : Valider un parcours d’authentification (PASS/FAIL).

## Cas de test:
mot de passe valide, mot de passe invalide

## Systèmes sous test (SUT)
- OrangeHRM Demo — https://opensource-demo.orangehrmlive.com/

## Environnement
- Navigateur : Firefox, Safari, Chrome
- Environnement de démo
- OS : Windows
- Réseau : internet privé

## Données de test
- Orange (succès) : user = `Admin`, pass = `admin123`
- Orange (échec) : user = `Admin`, pass = `wrong_password`

## Cas de test

| ID              | Titre        | Etapes                                                                    | Résultat attendu                                        |
|-----------------|--------------|---------------------------------------------------------------------------|---------------------------------------------------------|
| LOGIN-001       | Login succès | 1) Ouvrir l'URL 2) Saisir `Admin` / `admin123` 3) Cliquer sur Login       | URL contient `/dashboard` + en-tête “Dashboard” visible |
| LOGIN-002       | Login échec  | 1) Ouvrir l'URL 2) Saisir `Admin` / `wrong_password` 3) Cliquer sur Login | Message “Invalid credentials” visible                   |
| Texte-page      | Texte-page   | 1) Ouvrir l'URL                                                           | Titre 'OrangeHRM' affiché sur l'onglet de la page       |

## Type de tests
Tests automatisés

## Critères d’acceptation
- Les 3 cas passent (PASS).  
- Preuves : rapport HTML Playwright (+ traces/screenshots en cas d’échec).

