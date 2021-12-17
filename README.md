# eval 2 Dynamiser vos sites avec javascript

Pour ce projet, le cahier des charges est suffisament clair. Se référer au sujet de l'évaluation pour en savoir plus.
De plus, une interface graphique est proposée dans le sujet, je vais donc m'attacher à me rapprocher le plus possible de cette interface.

## Choix des technologies

- L'application sera réalisé avec Visual Studio Code
- La base de l application est un fichier html
- un fichier CSS servira pour des petites modifs de style
- pour rendre l application responsive et le style global de l'application, je choisis Bootstrap 5 (instalation via CDN)
- pour dynamiser l application, le choix de javascript est imposé
- github sera utilisé pour le versionning https://www.github.com
- le site sera mis en ligne sur la plateforme gratuite PlanetHoster https://www.planethoster.com/fr/World-Lite

## Mise en place du projet

Organisation des fichiers :

- index.html est la seule page web présente
- style.css pour les réajustement de style
- script.js pour la programmation en javascript
- /annexes pour les fichiers annexes

Installation de Bootstrap 5 via CDN en ajoutant les liens présents sur la documentation :
html`

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
`

## Deposer le repository sur Github

Création du repository sur github dont voici le lien : https://github.com/erekhose35/eval2/tree/main.

A cette occasion, le fichier README.md est créé.

J'ai créé une branche 'functionJS' pour intégrer petit a petit toutes mes fonctions JS afin de garder dans la branche 'main' une version débuggué.

## Déploiement de la réalisation en ligne

Pour la mise en ligne, j'ai choisis une plateforme gratuite. Mon premier essais sur Heroku n étant pas concluant, je me suis tourner vers PlanetHoster World Lite. Voici le lien : https://erekhose.go.yj.fr/

## Réalisation du programme

- la première étape a consisté à créer grâce à html et Bootstrap une interface rapidement.
- Puis, créer un algorithme : voir schéma dans /annexes/Eval2-Algorithme.png
  (réalisé en ligne sur : https://excalidraw.com/)
- Pour passer de l'algoritme à javascript, j 'ai décidé de découper mon script en plusieurs petites fonctions que j ai intégré petit à petit de ma branch 'functionJS' à ma branche 'main'
- quand l'appli fonctionnait bien, j ai décidé d'améliorer le design de l'interface
- et enfin d intégrer des icons SVG et une 'animation' sonore (mp3 open source)
