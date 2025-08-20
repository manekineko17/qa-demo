
## Plan de test – OrangeHRM ##
Date : 17-08-2025
Objectif : Valider un parcours d’authentification (PASS/FAIL).

## Cas de test:
mot de passe valide, mot de passe invalide

## Systèmes sous test (SUT)
- OrangeHRM Demo — https://opensource-demo.orangehrmlive.com/

## Environnement
- Navigateur : Firefox
- Environnement de démo
- OS : Windows
- Réseau : internet privé

## Données de test
- Orange (succès) : user = `Admin`, pass = `admin123`
- Orange (échec) : user = `Admin`, pass = `wrong_password`

## Cas de test

| ID        | Titre        | Etapes                                                                    | Résultat attendu                                        |
|-----------|--------------|---------------------------------------------------------------------------|---------------------------------------------------------|
| LOGIN-001 | Login succès | 1) Ouvrir l'URL 2) Saisir `Admin` / `admin123` 3) Cliquer sur Login       | URL contient `/dashboard` + en-tête “Dashboard” visible |
| LOGIN-002 | Login échec  | 1) Ouvrir l'URL 2) Saisir `Admin` / `wrong_password` 3) Cliquer sur Login | Message “Invalid credentials” visible                   |

## Type de tests
Testts automatisés

## Critères d’acceptation
- Les 2 cas passent (PASS).  
- Preuves : rapport HTML Playwright (+ traces/screenshots en cas d’échec).

