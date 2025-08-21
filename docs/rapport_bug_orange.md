# BUG-LOGIN-001 – Login sans message d'erreur avec mot de passe incorrect

## Contexte
- Application : OrangeHRM Demo  
- URL : https://opensource-demo.orangehrmlive.com/  
- Navigateurs : Firefox, Chrome, Safari  
- Date : 17-08-2025  
- Cas de test : LOGIN-002 (Login échec)

## Étapes pour reproduire l'échec
1. Aller sur la page de login : https://opensource-demo.orangehrmlive.com/  
2. Saisir `Admin` comme Username  
3. Saisir `wrong_password` comme Password  
4. Cliquer sur 'Login'

## Résultat observé
- L’application recharge la page mais 'aucun message d’erreur n’apparaît'.  
- L’utilisateur ne comprend pas pourquoi l’accès est refusé.

## Résultat attendu
- Le message d’erreur s’affiche 'Invalid credentials'.

## Preuves
- Screenshot attaché (voir `test-results/LOGIN-002/screenshot.png`)  
- Trace Playwright dans : `test-results/traces`

## Gravité / Priorité
- Gravité : **Majeur** (problème d’expérience utilisateur → impossible de savoir pourquoi la connexion échoue).  
- Priorité : **Haute** (fonctionnalité critique = authentification).

## Statut
- Ouvert (à corriger).
