<?php
include_once('layouts/header.php');
?>
<section class="single" id="unyc">
    <div class="wrapper">
        <div class="single-container">
            <h1>QRscan</h1>
            <!-- Ajouter une flèche vers le bas -->
            <div class="image-principal position-relative">
                <img src="images/qrscan/qrscan.png" alt="QRscan">
            </div>
            <div class="wysiwyg">

                <h2>Contexte</h2>
                <p>
                    <span>PageEduc</span>, une librairie spécialisée dans la <span>littérature jeunesse</span>, organise chaque année des événements.
                    Afin d’optimiser la <span>gestion des participants</span>, elle souhaite mettre en place une solution numérique permettant de <span>suivre en temps réel</span> la présence des invités.

                </p>

                <h2>Présentation du projet</h2>
                <p>
                    L’objectif est donc de développer une <span>application mobile</span> capable de <span>scanner des codes-barres</span> distribués aux personnes inscrites et d’<span>automatiser l'enregistrement</span> des présences directement dans le <span>back-office</span>.
                    L'application est réaliser avec <span>React Native</span> et <span>Expo</span>.
                </p>

                <h2>Description des tâches</h2>
                <ul>
                    <li>
                        Installation et configuration de <span>l'environnement de développement</span> avec <span>React Native + Expo</span> et mise en place du <span>versioning</span> avec <span>Git</span>.
                    </li>
                    <li>
                        Création des premières <span>pages</span> et structuration des différentes <span>sections</span> de l’application.
                    </li>
                    <li>
                        Implémentation de la <span>fonctionnalité de scan</span> des <span>codes-barres</span> grâce à la librairie <span>vision-camera</span>.
                    </li>
                    <li>
                        Développement de <span>l’interface de connexion</span> et intégration de la librairie <span>SecureStore</span> pour le stockage sécurisé des <span>tokens de connexion</span>.
                    </li>
                    <li>
                        Intégration et exploitation des <span>APIs</span> existantes pour récupérer les événements, vérifier les <span>identifiants de connexion</span> et valider les <span>codes-barres</span>.
                    </li>
                    <li>
                        Mise en place d’un <span>tableau récapitulatif</span> affichant les codes scannés.
                    </li>
                    <li>
                        Réalisation de tests approfondis sur <span>iOS</span> et <span>Android</span>.
                    </li>
                    <li>
                        Déploiement de l’application sur <span>iOS</span> et <span>Android</span>.
                    </li>
                </ul>

                <h2 class="section-title mb-3">Conclusion</h2>
                <p>
                    La mise en place de <span>l'environnement de développement</span> avec <span>React Native</span> et <span>Expo</span> a été une étape particulièrement complexe, nécessitant une forte capacité d'adaptation et de résolution de problèmes. Une fois cet obstacle surmonté, j'ai pu approfondir mes compétences en <span>développement mobile</span>, notamment sur l'intégration du <span>scan de codes-barres</span>, la gestion des <span>APIs</span> et la <span>sécurisation des données</span>. J'ai également optimisé mon workflow avec <span>Git</span> et mené des tests sur <span>iOS</span> et <span>Android</span>. Cette expérience m'a permis de gagner en <span>autonomie</span> et en <span>efficacité</span> dans un environnement technique exigeant.
                </p>

                <h2>Compétences développées</h2>
                <p>
                    <a class="link" href="/skills.php"><span>Mettre à disposition des utilisateurs un service informatique :</span></a> Mise en place d'une application mobile intuitive avec une gestion efficace des utilisateurs et des événements.
                </p>
                <p>
                    <a class="link" href="/skills.php"><span>Organiser son développement professionnel :</span></a> Veille sur la technologie mobile et plus particulierement React Native.
                </p>
            </div>
        </div>
    </div>
</section>

<?php
include_once('layouts/footer.php');
?>