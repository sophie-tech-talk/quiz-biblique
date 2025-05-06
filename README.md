# Quiz biblique interactif

Ce projet consiste en un quiz interactif destiné à tester les connaissances bibliques de l'utilisateur. Le quiz comporte 10 questions à choix multiples. À la fin du quiz, un score est affiché, accompagné d'un message d'encouragement personnalisé selon les résultats.

---

## Fonctionnalités

1. **Écran d'accueil** :
   - L'utilisateur peut entrer son prénom.
   - Un bouton **"Suivant"** permet de démarrer le quiz.

2. **Questions à choix multiples** :
   - Chaque question propose 4 réponses possibles.
   - L'utilisateur peut sélectionner une seule réponse par question.
   - Après avoir validé sa réponse :
     - La bonne réponse est affichée en **fond vert**.
     - La mauvaise réponse est affichée en **fond rouge**.
     - Les réponses sont contenues dans des rectangles pour faciliter la gestion du fond.
   - Un bouton **"Question suivante"** permet de passer à la question suivante.

3. **Écran des résultats** :
   - Le score est affiché sous la forme **"Vous avez eu X / 10"**.
   - Un message d'encouragement est fourni selon le score obtenu avec plusieurs palliers :
     - **1 à 5** 
     - **6 à 7**
     - **8 à 10**
   - Un bouton **"Recommencer le quiz"** permet de relancer le quiz.

4. **Interface utilisateur** :
   - L'ensemble du quiz est **centré** sur l'écran.
   - Un **copyright** est affiché en bas de la page.

5. **Désactivation du bouton de validation** :
   - Le bouton **"Valider ma réponse"** est désactivé tant qu'aucune réponse n'a été sélectionnée.
   - Il devient activé uniquement une fois qu'une réponse est choisie.

---

## Structure du projet

Dossier : quiz-biblique
- index.html # Structure HTML
- style.css # Styles et mise en page
- script.js # Logique JavaScript du quiz

---

## Processus de développement
Le projet a été développé en **vibe coding** avec ChatGPT.

## Prompt

Je veux créer un quiz biblique intéractif, donne moi le code.

Écran d'accueil :
- Permet à l'utilisateur d'entrer son prénom et de démarrer le quiz.

Questions : 
- 10 questions à choix multiples.
- La bonne réponse apparaît en vert et la mauvaise en rouge après validation.
- Un bouton "Question suivante" permet de passer à la question suivante.

Résultats :
- Affichage du score et d'un message d'encouragement basé sur les résultats.

Interface :
- Le quiz est centré sur l'écran, avec un copyright en bas.

Validation :
- Le bouton "Valider ma réponse" est désactivé tant qu'aucune réponse n'est sélectionnée.
