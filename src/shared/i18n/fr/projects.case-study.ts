export const projectsCaseStudy = {
    back_to_work: "Retour aux projets",
    previous_project: "Projet précédent",
    next_project: "Projet suivant",
    previous_image: "Image précédente",
    next_image: "Image suivante",
    my_role: "Mon rôle",
    project_stack: "Stack",
    project_outcome: "Résultat",
    project_context: "Le contexte",
    project_challenge: "Le défi",
    project_ownership: "Ce que j'ai piloté",
    project_constraint: "La contrainte",
    project_response: "Ma réponse",
    projects_case_study: {
        centseizeapi: {
            category: "Édition média musicale",
            context_title: "Une seule API derrière trois clients.",
            context_body:
                "116 couvre la culture hip hop en RDC : articles, émissions vidéo, pages de paroles, et la mise en avant qui les finance. Le site, le back office et l'application lisent tous un même contrat. J'ai construit l'API.",
            challenge_title: "Un seul déployable, quatre modules, aucun raccourci.",
            constraint:
                "Une base et un processus uniques rendent trop facile l'accès d'un module aux tables d'un autre.",
            response:
                "Identity, Content, Storage et Mailer ont chacun leur contexte EF Core et leur schéma PostgreSQL, et ne communiquent que par des projets Contracts. NetArchTest casse le build dès qu'une frontière est franchie.",
            ownership: [
                "Découpé l'API en quatre modules sous .NET 9, chacun avec son schéma PostgreSQL, ses migrations et son DbContext.",
                "Écrit le dispatcher CQRS derrière Carter, la validation et la journalisation étant enregistrées en décorateurs via Scrutor pour que les 297 handlers en héritent.",
                "Unifié la gestion des erreurs derrière un seul contrat Problem Details RFC 7807, exposé via Swagger/OpenAPI, réduisant d'environ 80% le code de branchement d'erreurs côté client.",
                "Déplacé les notifications vers un outbox écrit dans la même transaction que le changement qui le déclenche, vidé par un job Quartz. Un serveur SMTP mort retarde désormais un mail au lieu de le perdre.",
                "Porté la suite à 8 566 tests unitaires et 2 234 tests d'intégration, ces derniers contre de vrais PostgreSQL et Redis via Testcontainers."
            ],
            outcome:
                "Un seul déployable pour toute la plateforme, avec des frontières tenues par les tests plutôt que par la mémoire."
        },
        centseizeweb: {
            category: "Site média musical",
            context_title: "La surface que les fans rencontrent.",
            context_body:
                "Articles, émissions vidéo, shorts, pages artistes et paroles, en français et en anglais. La plupart des lecteurs arrivent par la recherche. J'ai construit le site qui rend tout cela.",
            challenge_title: "Suivre une API qui bouge à chaque livraison.",
            constraint:
                "Des pages éditoriales rendues côté serveur côtoient des fils vidéo interactifs, en deux langues, face à une API qui ne cesse de grandir.",
            response:
                "Le client typé est généré depuis le swagger du backend. Six modules, quatre couches chacun, dépendances résolues par Awilix.",
            ownership: [
                "Next.js 16 et React 19. Des groupes de routes gardent le catalogue public hors du bundle membre.",
                "Client API typé généré depuis le swagger en une commande. Un écart de contrat devient une erreur TypeScript.",
                "Six modules, chacun avec ses couches domain, application, infrastructure et presentation.",
                "Corps d'articles assainis avec DOMPurify avant le rendu.",
                "Vidéo et shorts sur Plyr et Embla, état serveur dans React Query."
            ],
            outcome:
                "Tout le catalogue en deux langues, aligné sur l'API par génération plutôt qu'à la main."
        },
        centseizedashboard: {
            category: "Outillage éditorial",
            context_title: "Là où travaille la rédaction.",
            context_body:
                "La rédaction écrit et publie tout ici, et la partie commerciale passe par le même outil : forfaits de mise en avant, commandes, emplacements publicitaires, preuves de paiement. Un rédacteur qui prépare un article et quelqu'un qui relance une facture finissent au même endroit.",
            challenge_title: "Empêcher quatorze domaines de déborder les uns sur les autres.",
            constraint:
                "Rédiger un article n'a pas grand chose à voir avec vérifier un paiement, et pourtant les deux vivent dans la même application, sans que l'un ait à traîner le code de l'autre.",
            response:
                "Chaque domaine est devenu son propre module sous React 19 et Vite, avec ses quatre couches. Redux Toolkit porte l'état qui traverse vraiment les écrans, et Ant Design fournit la coquille commune.",
            ownership: [
                "Construit le back office en quatorze modules derrière une seule coquille Ant Design, chacun gardant ses couches domain, application, infrastructure et presentation.",
                "Posé l'éditeur d'articles sur TipTap, étendu avec image, lien, YouTube et alignement pour qu'un rédacteur ne touche jamais au HTML.",
                "Fait descendre les rôles et permissions jusque dans les composants, pour qu'une action interdite ne soit tout simplement pas dessinée.",
                "Persisté session et préférences avec Redux Persist derrière une transformation chiffrée, pour qu'un rechargement ne laisse rien de lisible dans le navigateur.",
                "Généré le client API typé depuis le même swagger que lisent le site public et l'application mobile."
            ],
            outcome:
                "La rédaction et les personnes qui facturent partagent un seul outil, avec le modèle de permissions visible dans l'interface et pas seulement appliqué derrière."
        },
        centseizemobile: {
            category: "Application média musicale",
            context_title: "La plateforme dans la poche.",
            context_body:
                "Émissions, shorts, fil découverte et favoris, sur Android et iOS, en français et en anglais. Le public est surtout sur téléphone, avec des connexions qui vont et viennent.",
            challenge_title: "Une application de catalogue qui survit à une mauvaise connexion.",
            constraint:
                "Une application qui ne marche qu'en ligne est une application qui marche parfois.",
            response:
                "Chaque appel renvoie un Either fpdart depuis un cas d'usage, les lectures atterrissent dans Hive, et la connectivité est surveillée plutôt que supposée.",
            ownership: [
                "Flutter et Dart sur Android et iOS. Clean Architecture avec BLoC, quatre couches par module.",
                "Client Chopper généré depuis le swagger du backend via build_runner.",
                "Échecs renvoyés en Either fpdart, pour que le chemin d'erreur soit traité et non jeté.",
                "Lectures mises en cache dans Hive et connectivité suivie. Perdre le signal laisse le contenu à l'écran.",
                "Connexion Google et Facebook sur flutter_secure_storage."
            ],
            outcome:
                "Le catalogue sur les deux stores, qui continue quand la connexion, elle, s'arrête."
        },
        savedashboard: {
            category: "Tableau de bord opérateur",
            context_title: "La salle de contrôle derrière l'application.",
            context_body:
                "Tout ce qu'un membre fait dans l'application SAVE a sa contrepartie côté opérateur : valider un groupe, examiner un prêt, recharger un portefeuille financé par une ONG. Ce tableau de bord tournait sur un JavaScript vieillissant et Semantic UI, et chaque nouvelle fonctionnalité prenait plus de temps que la précédente.",
            challenge_title: "Moderniser un tableau de bord jamais à l'arrêt.",
            constraint:
                "Le code était en JavaScript sans types, la bibliothèque de composants avait fait son temps, et les opérateurs y travaillaient chaque jour : rien ne pouvait s'arrêter pendant les travaux.",
            response:
                "Conversion en TypeScript module par module, réorganisation des sources autour de Feature Sliced Design pour que chaque domaine tienne seul, et remplacement de Semantic UI par shadcn/ui sur TailwindCSS écran après écran.",
            ownership: [
                "Migration du code d'un JavaScript sans types vers TypeScript, pour que les casses apparaissent à la compilation plutôt que devant un opérateur.",
                "Réorganisation des sources autour de Feature Sliced Design, avec une tranche propre pour les groupes d'épargne, les utilisateurs, les prêts et les portefeuilles.",
                "Remplacement de Semantic UI React par shadcn/ui sur TailwindCSS écran après écran, les deux bibliothèques cohabitant jusqu'au dernier écran migré.",
                "Maintien de Redux comme couche d'état pendant que tout changeait autour, pour qu'aucun opérateur n'ait à réapprendre un parcours en cours de migration.",
                "Construction des outils opérateur pour les groupes d'épargne, les comptes membres, les prêts et microcrédits, et les portefeuilles ONG qui les financent."
            ],
            outcome:
                "Une interface d'administration couvrant tout ce que fait l'application mobile, sur un code qui détecte désormais ses propres erreurs et se découpe proprement par fonctionnalité."
        },
        save: {
            category: "Inclusion financière",
            context_title: "Une banque qui tient dans un téléphone simple.",
            context_body:
                "Exuus a créé SAVE pour celles et ceux qui, au Rwanda, épargnent en groupe plutôt qu'à la banque. L'application tourne en React Native et aussi en USSD sur *777#, pour qu'un membre sans smartphone ne soit jamais écarté. J'ai rejoint l'équipe pour aider à la construire, et j'ai fini par retravailler son apparence autant que sa façon d'être livrée.",
            challenge_title: "Refondre l'application sans ralentir les livraisons.",
            constraint:
                "L'interface était en pleine refonte alors que chaque livraison partait encore à la main, et l'équipe voyait mal où les membres se bloquaient vraiment.",
            response:
                "Reprise des écrans en React Native et TypeScript, passage des livraisons sur Fastlane pour qu'un build parte vers les stores en une seule commande, et intégration de Clarity pour voir où les membres hésitaient.",
            ownership: [
                "Construction de l'application en React Native et TypeScript, avec React Query pour le cache de l'état serveur et Jotai pour le reste, réduisant les appels réseau répétés sur les écrans principaux.",
                "Refonte de l'interface écran par écran, en raccourcissant le chemin vers l'épargne, le crédit et le paiement de factures pour que chacun s'atteigne en moins de touches sur les téléphones Android modestes que possèdent la plupart des membres.",
                "Mise en place du déverrouillage biométrique avec React Native Biometrics, pour que les membres accèdent à leur argent par empreinte ou Face ID plutôt qu'en saisissant un code à chaque ouverture.",
                "Introduction de Fastlane, transformant une livraison en une seule commande là où il fallait passer à la main par App Store Connect et la Play Console.",
                "Lecture des rejeux de session Clarity pour repérer les hésitations des membres, puis suppression du second clic sur les parcours principaux afin qu'ils arrivent du premier coup sur l'écran voulu.",
                "Mise en place de React Native Testing Library et couverture des écrans clés par des tests de comportement, pour que les régressions apparaissent avant qu'un build ne quitte la machine."
            ],
            outcome:
                "Une application d'épargne qui tient sur les téléphones que ses membres possèdent vraiment, avec des livraisons en une commande et des données de session qui montrent quoi corriger ensuite."
        },
        storm: {
            category: "Infrastructure d'actifs numériques",
            context_title: "Ramener la gestion des actifs sous un seul toit.",
            context_body:
                "BESTSELLER conservait ses visuels produits dans une plateforme Microsoft 365 sous licence qui ne suivait plus le rythme : déposer un fichier et le voir parvenir aux marques prenait souvent une bonne partie de la journée. StorM a été construit de zéro dans l'entreprise pour reprendre ce rôle.",
            challenge_title: "Changer de système sans arrêter l'activité.",
            constraint:
                "La plateforme sous licence était figée sur une version qui ne pouvait plus être hébergée sans risque, alors que chaque équipe de marque et une longue liste de systèmes connectés s'appuyaient dessus chaque jour.",
            response:
                "Faire grandir StorM à côté de l'existant, sur des services .NET derrière une interface Next.js, puis déplacer les équipes et les intégrations par vagues pour que personne ne perde l'accès à ses fichiers.",
            ownership: [
                "Arrivé dans l'équipe frontend, où le travail React a réduit le temps de chargement des pages de 30% sur l'application Digital Media and Marketing.",
                "Passage rapide aux tâches backend, avec la refonte des services .NET en async et injection de dépendances, réduisant les temps de réponse des API de 40%.",
                "Ajout de producteurs RabbitMQ diffusant les métadonnées des actifs dès qu'elles changent, réduisant les délais de synchronisation de 80%.",
                "Mise en place de métriques OpenTelemetry alimentant Datadog, pour un gain de performance de 25%.",
                "Rédaction de la base de tests réutilisable, améliorant l'efficacité du contrôle qualité de plus de 30%."
            ],
            outcome:
                "Une plateforme d'actifs que l'entreprise possède entièrement, où les dépôts parviennent aux marques en minutes plutôt qu'en une journée."
        },
        servicenow: {
            category: "Automatisation des processus métier",
            context_title: "Faire passer les démarches de l'équipe People sur la plateforme.",
            context_body:
                "Poser un congé chez BESTSELLER passait par un e-mail aux RH, et réserver un taxi par la personne qui tenait le calendrier. J'ai construit des applications dédiées sur ServiceNow pour que les deux deviennent des demandes de catalogue avec approbations, puis j'ai pris en charge le transfert des données de contrats de production vers Boomi.",
            challenge_title: "Une seule plateforme, trois problèmes très différents.",
            constraint:
                "Chaque type de congé avait ses propres règles d'éligibilité et ses approbateurs, les demandes de taxi devaient fonctionner depuis un téléphone, et les enregistrements de contrats de production étaient bien trop volumineux pour partir vers Boomi en une seule fois.",
            response:
                "Chaque type de congé est devenu un article de catalogue avec son parcours d'approbation dans Flow Designer, la réservation de taxi est passée par Mobile Agent, et l'export des contrats s'est exécuté par lots via des tâches planifiées.",
            ownership: [
                "Construction d'applications dédiées pour l'équipe People couvrant congés annuels, maladie et parentaux, chacun avec son article de catalogue, son parcours d'approbation et ses SLA, augmentant l'automatisation de 40%.",
                "Ouverture de la réservation de taxi depuis le téléphone via Mobile Agent, une demande en quelques touches plutôt qu'un passage au bureau de quelqu'un.",
                "Transfert des enregistrements de contrats de production de ServiceNow vers Boomi, en parcourant le volume par pages via des tâches planifiées pour qu'aucune n'expire en cours de route.",
                "Configuration des notifications SMTP et POP3 tenant les demandeurs informés, réduisant le temps de réponse de 30%.",
                "Rédaction des UI Actions, Client Scripts, Business Rules, ACL et rapports qui tiennent l'ensemble, pour 30% d'efficacité système en plus."
            ],
            outcome:
                "Congés, déplacements et données de contrats passaient tous par une seule plateforme, chaque demande traçable, avec 25% d'efficacité de workflow en plus."
        },
        codeofafrica: {
            category: "Plateforme d'entreprise et SEO",
            context_title: "Rendre un hub d'externalisation visible.",
            context_body:
                "Code of Africa connecte les entreprises européennes aux ingénieurs d'Afrique de l'Est, mais le site vitrine était quasi invisible dans les moteurs de recherche et l'équipe frontend n'avait aucun standard de qualité partagé.",
            challenge_title: "Gagner en visibilité et élever le niveau.",
            constraint:
                "Le site devait se positionner sur un marché européen concurrentiel alors que l'équipe construisait encore ses propres pratiques d'ingénierie.",
            response:
                "Reconstruction du site autour d'une base SEO et d'accessibilité plus stricte, puis transformation de ces conventions en habitudes d'équipe par la revue de code et le mentorat.",
            ownership: [
                "Amélioration du référencement et de la notoriété de 35% grâce à une refonte orientée SEO.",
                "Pilotage des équipes frontend transverses et amélioration de la qualité du code de 40% via une revue structurée.",
                "Mentorat de plus de 5 développeurs juniors devenus autonomes."
            ],
            outcome:
                "Un produit vitrine enfin visible et une équipe frontend capable de maintenir son propre standard de qualité."
        },
        ezyagric: {
            category: "Plateforme agritech",
            context_title: "Apporter des services à des agriculteurs hors ligne.",
            context_body:
                "EzyAgric donne aux agriculteurs et agro-entreprises ougandais l'accès aux intrants, aux marchés, aux registres et au financement. La plateforme devait fonctionner sur des appareils d'entrée de gamme et des connexions instables.",
            challenge_title: "Rendre légère une plateforme riche en données.",
            constraint:
                "Des réseaux lents, un jeu de données CouchBase en croissance et des flux d'authentification ayant accumulé des vulnérabilités de session.",
            response:
                "Durcissement du cycle de vie des jetons d'authentification, restructuration du stockage pour des lectures rapides, et refonte des interfaces Angular autour d'un rendu progressif et peu gourmand en bande passante.",
            ownership: [
                "Durcissement des flux d'authentification, réduisant les vulnérabilités de session de 80%.",
                "Optimisation du stockage CouchBase, améliorant les performances et la fiabilité de la base de 35%.",
                "Mise en place d'une architecture de tests PHPUnit réutilisable, raccourcissant les cycles de développement de 45%."
            ],
            outcome:
                "Une plateforme plus rapide et plus sûre au service de dizaines de milliers d'agriculteurs en Ouganda."
        },
        motory: {
            category: "Modernisation d'une marketplace",
            context_title: "Sauver un système white-label de huit ans.",
            context_body:
                "Motory est une marketplace automobile allemande bâtie sur une plateforme white-label étendue pendant plus de huit ans. Les nouvelles fonctionnalités arrivaient lentement et la recherche tenait à peine la charge réelle.",
            challenge_title: "Moderniser sans tout réécrire.",
            constraint:
                "Une large base de code PHP héritée en production continue : rien ne pouvait être mis hors ligne et une réécriture complète n'a jamais été envisageable.",
            response:
                "Modernisation incrémentale du système, bascule de la recherche sur ElasticSearch et remplacement des chemins les plus lents un à un, derrière l'interface existante.",
            ownership: [
                "Maintenance et extension de la plateforme PHP héritée sans interruption de service.",
                "Introduction d'une recherche adossée à ElasticSearch sur les annonces et les discussions.",
                "Augmentation de la réactivité du système et de la fidélité des utilisateurs de 20%."
            ],
            outcome:
                "Une marketplace héritée aux performances modernes, sans migration perturbatrice."
        },
        tembea: {
            category: "Outillage interne des opérations",
            context_title: "Automatiser les déplacements d'une entreprise.",
            context_body:
                "Andela coordonnait manuellement les demandes de taxi, les itinéraires et la réconciliation entre les équipes Opérations et Voyages. Tembea a remplacé tout cela par une application pensée pour Slack, adossée à un tableau de bord web.",
            challenge_title: "Aller là où les gens travaillent déjà.",
            constraint:
                "Les équipes Opérations vivaient dans Slack, tandis que l'équipe Voyages avait besoin de vues de reporting et de réconciliation qu'aucune interface de chat ne pouvait offrir.",
            response:
                "Construction d'un backend Node/Express et PostgreSQL servant les deux surfaces : l'API Slack pour les demandes quotidiennes, l'application web pour le pilotage.",
            ownership: [
                "Construction du backend Node/Express et PostgreSQL pour les demandes de trajet et la gestion des itinéraires.",
                "Intégration de l'API Slack pour les mises à jour en temps réel, réduisant le temps de réponse de 20%.",
                "Application de la mémoïsation et de la virtualisation aux grandes vues de données, améliorant le défilement de 70%."
            ],
            outcome:
                "Les équipes Opérations et Voyages ont gagné 30% de productivité, avec des données de trajet enfin fiables."
        },
        saveplus: {
            category: "Financement participatif fintech",
            context_title: "Collecter des fonds devrait être sans effort.",
            context_body:
                "SavePlus permet de collecter des fonds pour tout, des remises de diplôme aux urgences médicales. J'ai piloté le frontend, là où la confiance et la clarté décident directement du succès d'une campagne.",
            challenge_title: "Des paiements qui ne laissent aucun doute.",
            constraint:
                "Les campagnes reposent simultanément sur le Mobile Money, PayPal et les cartes, sur tous les navigateurs et appareils, où une seule transaction échouée coûte un don.",
            response:
                "Construction des flux de paiement autour d'états explicites et d'erreurs récupérables, puis couverture des chemins critiques par des tests Cypress de bout en bout sur chaque navigateur supporté.",
            ownership: [
                "Construction du frontend du produit de financement participatif, améliorant la rétention de 25%.",
                "Intégration des paiements Mobile Money, PayPal et carte avec un taux de succès de 99,9%.",
                "Rédaction de la suite de tests Cypress, améliorant la fiabilité multi-navigateurs de 30%."
            ],
            outcome:
                "Des milliers de transactions traitées chaque mois, avec un paiement que les utilisateurs terminent sans hésiter."
        },
        reconstruction: {
            category: "Plateforme éducative",
            context_title: "Reconstruire une plateforme autour de son récit.",
            context_body:
                "Reconstruction enseigne l'histoire et la culture noires à travers des cours et du contenu éditorial. Le frontend destiné aux utilisateurs avait grandi plus vite que sa structure ne pouvait le supporter.",
            challenge_title: "Ré-architecturer tout en livrant.",
            constraint:
                "La diffusion des cours passait par l'API Thinkific et des services .NET, et le produit ne pouvait pas s'arrêter le temps d'une réécriture.",
            response:
                "Ré-architecture du frontend autour du Clean Code et du Domain-Driven Design, optimisation de la couche .NET et Entity Framework, et protection de chaque changement par des tests de régression visuelle.",
            ownership: [
                "Amélioration des performances et de la maintenabilité de 30% via une ré-architecture progressive.",
                "Optimisation des services .NET avec MassTransit et le réglage d'Entity Framework, réduisant la latence de 35%.",
                "Mise en place de pipelines CI pour les snapshots Storybook, réduisant les correctifs post-livraison de 70%."
            ],
            outcome:
                "Une plateforme maintenable où l'inscription et le suivi de progression sont devenus 35% plus simples pour les apprenants."
        },
        alfatier: {
            category: "MVP d'optimisation cloud",
            context_title: "Construire un produit dès le premier commit.",
            context_body:
                "Alfatier aide les entreprises à optimiser et sécuriser leur empreinte cloud publique. Je suis arrivé comme ingénieur en phase d'amorçage, avant même l'existence du frontend, et j'ai façonné à la fois le produit et les fondations techniques.",
            challenge_title: "Survivre à la semaine de lancement.",
            constraint:
                "Un MVP sans code existant, une date de lancement fixe et des prévisions de trafic que personne ne pouvait estimer.",
            response:
                "Choix d'une architecture modulaire à base de Web Components encapsulés, couverture de tests complète dès le premier jour, et découplage des actions frontend via un pipeline d'événements Kafka.",
            ownership: [
                "Pilotage du développement avec la designer UI/UX, augmentant la satisfaction utilisateur de 30%.",
                "Livraison du MVP avec 100% de couverture de tests, tenant un trafic élevé pendant la semaine de lancement.",
                "Intégration de LogRocket et NewRelic, augmentant l'efficacité du produit de 40%."
            ],
            outcome:
                "Un produit qui a absorbé sans heurt un trafic 3x supérieur après le lancement, avec 45% de latence API en moins."
        },
        meet: {
            category: "Portfolio Flutter Web",
            context_title: "Prouver que Flutter peut tenir le web.",
            context_body:
                "Meet est une application portfolio entièrement construite en Flutter Web, créée pour mesurer jusqu'où une seule base de code Dart peut aller quand la cible est un site public et indexable.",
            challenge_title: "Une application canvas qui reste une page web.",
            constraint:
                "Flutter Web rend sur un canvas, ce qui donne un contrôle total du design mais coûte la sémantique et la découvrabilité dont dépend un portfolio.",
            response:
                "Structuration de l'application autour de Riverpod et Flutter Hooks pour un état prévisible, complétée par des métadonnées SEO et des indications sémantiques pour rester accessible.",
            ownership: [
                "Conception et développement complet de l'application Flutter Web.",
                "Mise en place de la gestion d'état avec Riverpod et Flutter Hooks.",
                "Ajout de la configuration SEO et de mises en page responsives pour chaque point de rupture."
            ],
            outcome:
                "Un modèle de portfolio personnalisable qui présente le travail de façon cohérente sur tous les appareils."
        },
        filmfan: {
            category: "Produit mobile",
            context_title: "Rendre le cinéma au Rwanda facile à trouver.",
            context_body:
                "Il n'existait aucun moyen simple de savoir ce qui passait dans les cinémas rwandais. Film Fan rassemble les films à l'affiche, les notes et les synopsis dans une seule application, la réservation étant la prochaine étape.",
            challenge_title: "Un catalogue riche sur une connexion modeste.",
            constraint:
                "Les métadonnées et visuels de films sont lourds, alors que le public utilise surtout des appareils Android de milieu de gamme et des forfaits data limités.",
            response:
                "Construction d'un client Flutter avec mise en cache agressive des images, découverte paginée et état tolérant au hors-ligne, pour que la navigation reste fluide même quand le réseau ne l'est pas.",
            ownership: [
                "Développement complet de l'application Flutter et de son expérience de découverte.",
                "Intégration de l'API du catalogue de films avec cache et pagination.",
                "Conception des vues de recommandation et de détail."
            ],
            outcome:
                "Une application open-source qui transforme la recherche de l'affiche du jour en quelques tapes."
        },
        clickmart: {
            category: "Commerce rural",
            context_title: "Relier les marchés urbains aux acheteurs ruraux.",
            context_body:
                "Click Mart donne aux communautés rurales un accès direct à des biens issus des centres urbains, en supprimant les intermédiaires qui rendaient les mêmes produits plus lents et plus chers.",
            challenge_title: "Un commerce limité par la connectivité.",
            constraint:
                "Les acheteurs commandent sur des connexions lentes et attendent que le paiement et la livraison fonctionnent du premier coup, loin de tout support.",
            response:
                "Innovation sur la synchronisation des données pour garder le catalogue utilisable hors ligne, et ajout d'un paiement par QR code qui supprime la friction au moment de payer.",
            ownership: [
                "Développement de l'application Ionic et de sa couche de synchronisation offline-first.",
                "Intégration du paiement par QR code, réduisant le temps de passage en caisse de 50%.",
                "Réduction des temps de chargement de 40% sur les connexions lentes."
            ],
            outcome:
                "Une expérience e-commerce qui atteint des acheteurs que les plateformes classiques n'ont jamais servis."
        },
        taskmanager: {
            category: "Application de productivité",
            context_title: "Une gestion de tâches qui se fait oublier.",
            context_body:
                "La plupart des applications de tâches optimisent les fonctionnalités. Task Manager a été conçu pour optimiser les deux secondes entre le moment où l'on pense à quelque chose et celui où on l'écrit.",
            challenge_title: "Rester instantané en grandissant.",
            constraint:
                "Courses quotidiennes, projets et engagements professionnels vivent dans une seule liste, et chaque écran supplémentaire est une raison d'abandonner l'application.",
            response:
                "Construction d'un client Flutter autour d'une persistance locale d'abord et d'une navigation plate, pour que la saisie et la validation restent à un seul geste.",
            ownership: [
                "Conception et développement complet de l'application Flutter.",
                "Implémentation de la persistance locale et de la gestion d'état.",
                "Définition du modèle d'interaction autour de la saisie en un geste."
            ],
            outcome:
                "Un gestionnaire de tâches open-source qui garde tout sous contrôle sans réclamer d'attention."
        },
        coolestdark: {
            category: "Outillage développeur",
            context_title: "Un thème pensé pour les longues sessions.",
            context_body:
                "Coolest Dark est né comme un thème Visual Studio Code personnel, inspiré de One Dark Pro et Bear, calibré pour la syntaxe Dart et Flutter que je lis le plus souvent.",
            challenge_title: "Lisible sans être criard.",
            constraint:
                "Une palette doit distinguer clairement la syntaxe dans de nombreux langages tout en restant confortable pendant des heures de lecture continue.",
            response:
                "Construction de la palette autour de ratios de contraste mesurés et d'un jeu d'accents retenu, puis validation sur de vraies bases de code Dart, TypeScript et PHP.",
            ownership: [
                "Conception complète de la palette de couleurs et des portées de tokens.",
                "Publication et maintenance du thème sur le Marketplace Visual Studio Code.",
                "Maintien d'un thème entièrement personnalisable et open-source."
            ],
            outcome:
                "Un thème publié qui réduit la fatigue oculaire des développeurs qui lisent du code toute la journée."
        },
        rege: {
            category: "Bibliothèque open-source",
            context_title: "Exporter une grille devrait tenir en une ligne.",
            context_body:
                "Tout projet React finit par devoir transformer une grille en tableur, et chaque projet résout le problème de zéro. React Excel Grid Export empaquette ce travail une fois pour toutes.",
            challenge_title: "Assez flexible pour valoir l'installation.",
            constraint:
                "Les équipes structurent leurs données de grille différemment et veulent contrôler l'apparence de la feuille : un exporteur rigide ne vaut pas mieux qu'un code écrit à la main.",
            response:
                "Conception d'une API où la forme des données et le formatage de sortie sont tous deux configurables, avec des valeurs par défaut couvrant le cas courant en un seul appel.",
            ownership: [
                "Conception et développement de la bibliothèque et de son API publique.",
                "Ajout des sorties Xlsx et Csv avec structure et apparence personnalisables.",
                "Publication et maintenance du paquet sur npm."
            ],
            outcome:
                "Un exporteur réutilisable qui supprime une portion récurrente de code répétitif des projets React."
        }
    }
};
