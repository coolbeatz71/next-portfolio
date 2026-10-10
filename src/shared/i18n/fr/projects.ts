export const projects = {
    contribution_title: "Mes contributions",
    contribution_subtitle:
        "Une compilation de projets marquants et innovants, démontrant mon expertise, mon esprit créatif et ma passion pour la résolution de problèmes grâce à la tech.",
    source_code: "Code source",
    projects_description: {
        centseizeapi:
            "116 API est le backend d'une plateforme média dédiée à la culture hip hop en RDC, qui alimente le site public, le back office éditorial et l'application mobile à partir d'un même contrat OpenAPI. Elle porte le catalogue éditorial fait d'articles, d'émissions vidéo et de pages de paroles, ainsi que le commerce qui le finance, des forfaits de mise en avant jusqu'aux preuves de paiement. C'est un monolithe modulaire sous .NET 9 où les frontières entre modules sont vérifiées par des tests d'architecture plutôt que laissées à la convention.",
        centseizeweb:
            "116 Web est le site public de la plateforme, là où les fans lisent les articles, regardent les émissions et les shorts, et consultent les paroles. Il tourne sous Next.js 16 et React 19, en français et en anglais, en lisant le même contrat OpenAPI que les autres clients. Chaque fonctionnalité est un module avec ses couches domain, application, infrastructure et presentation, pour qu'un écran dépende d'un cas d'usage et non d'un appel HTTP.",
        centseizedashboard:
            "116 Dashboard est le back office depuis lequel la rédaction fait tourner la plateforme : rédaction des articles, publication des émissions et des shorts, gestion des artistes et des paroles, et commerce associé, des forfaits aux preuves de paiement. C'est une application React 19 et Vite construite en quatorze modules derrière une seule coquille Ant Design. Les rôles et permissions remontent jusque dans l'interface, pour que chacun voie les actions qu'il a le droit de faire.",
        centseizemobile:
            "116 Mobile, c'est la plateforme dans la poche : les émissions, les shorts, le fil découverte et les favoris, sur Android et iOS. C'est une application Flutter en Clean Architecture avec BLoC, où chaque module porte ses couches domain, application, infrastructure et presentation. Elle met en cache ce que le lecteur a ouvert et surveille la connexion, pour qu'une coupure de signal ne vide pas l'écran.",
        savedashboard:
            "La face opérateur de SAVE, où l'équipe Exuus et les organisations partenaires pilotent ce que les membres utilisent sur leur téléphone : groupes d'épargne, comptes utilisateurs, prêts et microcrédits, et portefeuilles financés par les ONG. Construit en React et TypeScript, il reprend chaque fonctionnalité mobile avec les contrôles dont un administrateur a besoin.",
        save: "Une application d'épargne et de crédit pour celles et ceux que les banques n'ont jamais atteints. SAVE permet d'épargner en groupe, d'emprunter auprès des autres membres selon un score de crédit social, d'envoyer de l'argent et de régler des factures, depuis un smartphone comme depuis un téléphone simple via USSD. Développée par Exuus, agréée par la Banque Nationale du Rwanda, avec des dépôts assurés par Access Bank.",
        storm: `Un système de gestion des actifs/médias numériques (DAM) conçu pour remplacer le DAM de Bestseller. Il permet de gérer les images, vidéos et ressources 3D pour toutes les marques, styles, collections, etc., en mettant l'accent sur la rapidité, la stabilité et la satisfaction des utilisateurs.`,
        servicenow:
            "Plusieurs applications utilisant Flow Designer, le Catalogue de services, les SLA, les ACL et l'Agent mobile. Configuration des notifications par e-mail (SMTP/POP3) pour les alertes système. Collaboration avec les parties prenantes pour traduire les besoins métier en exigences fonctionnelles et création d'actions d'interface utilisateur, de scripts client, de règles métier, de travaux planifiés et de rapports essentiels.",
        codeofafrica:
            "L'application web de la landing page de l'entreprise, un hub d'externalisation basé en Allemagne, connecte les entreprises européennes aux meilleurs ingénieurs logiciels d'Afrique de l'Est, avec pour priorité la création d'emplois, l'éducation et le changement des perceptions en Europe.",
        motory: "Une place de marché automobile allemande axée sur la communauté, permettant d’acheter, vendre, accéder à des informations automobiles et participer à des discussions. La plateforme offre une documentation pour les transactions et rassemble les passionnés d’automobile.",
        ezyagric:
            "Une plateforme web et mobile à la demande offrant un accès inclusif et basé sur les données aux services de production, de marketing et de finance pour les agriculteurs et les agro-entreprises ougandais, les aidant à cartographier les jardins, à accéder aux intrants, aux services, aux enregistrements et aux marchés qui paient pour la qualité.",
        tembea: "Une plateforme d'Andela qui automatise les demandes de taxis, la gestion des itinéraires et la réconciliation via Slack et une application web, répondant aux besoins des opérations et voyages pour les Andelans en déplacement.",
        saveplus:
            "Une application web de financement participatif à but lucratif permettant de collecter des fonds pour des événements, des célébrations aux situations difficiles comme accidents ou maladies.",
        reconstruction:
            "Une application éducative sur la culture noire mettant en valeur l'héritage des descendants africains à travers un contenu captivant, célébrant leurs contributions mondiales et revisitant les récits traditionnels.",
        alfatier:
            "Une plateforme offrant des services de gestion, optimisation et développement pour les infrastructures cloud publiques, axée sur la sécurité, la réduction des coûts et la transformation numérique rapide avec Microsoft Azure et Google Cloud.",
        meet: "Une application web élégante pour présenter facilement des créations. Avec une interface intuitive et des modèles personnalisables, elle met en valeur projets, compétences et expériences de manière visuellement impressionnante.",
        filmfan:
            "Une application mobile offrant une expérience de découverte de films fluide, avec des projets d'intégration de réservation de cinémas. Elle aide les utilisateurs à découvrir les films à l'affiche au Rwanda, avec des informations telles que les évaluations, résumés et recommandations.",
        clickmart:
            "Une application mobile reliant les marchés urbains aux acheteurs ruraux, offrant une expérience de commerce en ligne fluide. Elle donne accès à une large gamme de produits de qualité, favorise l'inclusion économique avec des paiements sécurisés et facilite la livraison dans les zones éloignées.",
        taskmanager:
            "Une application mobile élégante pour organiser facilement les tâches. Que ce soit pour les courses quotidiennes, la gestion de projets ou l'équilibre entre travail et vie personnelle, ce gestionnaire intuitif aide à rester sur la bonne voie.",
        coolestdark:
            "Un thème Visual Studio Code inspiré des thèmes One Dark Pro et Bear. Il offre une palette de couleurs élégante pour une lisibilité optimale et une réduction de la fatigue oculaire, idéal pour les développeurs Dart/Flutter. Entièrement personnalisable et open-source.",
        rege: "Une bibliothèque d'exportation de données créée pour ReactJs. Elle permet aux utilisateurs d'exporter des données d'un tableau vers des formats Excel tels que Xlsx ou Csv, avec la possibilité de personnaliser l'apparence et la structure des données."
    }
};
