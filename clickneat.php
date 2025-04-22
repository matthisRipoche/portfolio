<?php
include_once('layouts/header.php');
?>
<section class="single" id="clickneat">
    <div class="wrapper">
        <div class="single-container">
            <h1>ClickNeat</h1>
            <!-- Mettre une flèche vers le bas -->
            <p>Cliquez sur l'image pour voir le site</p>
            <div class="image-principal position-relative">
                <a class="ghostlink" href="https://www.clickneat.com/" target="_blank"></a>
                <img src="images/clickneat/clickneat.png" alt="">
            </div>
            <div class="wysiwyg">
                <h2>Contexte :</h2>
                <p>
                    Ce projet a été conçu dans le cadre de ma formation en alternance afin de consolider mes compétences en développement web. Il s'agit d'un cas concret d'application métier, avec gestion multi-utilisateurs, rôles, données relationnelles, et logique de commande avancée. Il m’a permis d’appliquer les concepts fondamentaux de Laravel, tout en développant une interface moderne et responsive. J’ai travaillé en autonomie sur l’entièreté du projet, de l’architecture à la mise en ligne.
                </p>
                <h2 class="section-title mb-3">Présentation du projet :</h2>
                <p>
                    <strong>ClickNeat</strong> est une application web full-stack de commande de restauration, développée avec <span>Laravel (PHP)</span>. Elle permet aux utilisateurs de parcourir différents restaurants, de composer leur commande via un panier dynamique, et de suivre l’état de leur commande en temps réel. Le tout est géré via un back-office pour les gestionnaires de restaurants, le tout avec une structure solide et scalable.
                </p>



                <h2>Description des tâches :</h2>
                <ul>
                    <li>
                        Création des <span>routes</span>
                    </li>
                    <li>
                        Sécurisation de l'accès via <span>middlewares</span> Laravel pour chaque rôle
                    </li>
                    <li>
                        Mise en place de l’<span>authentification Laravel</span> avec gestion des rôles (utilisateur / gestionnaire)
                    </li>
                    <li>
                        Création des <span>modèles Eloquent</span> : User, Restaurant, Category, Item, Order, OrderItem
                    </li>
                    <li>
                        Développement des pages de navigation : liste des restaurants, catégories, articles, détail d’un plat
                    </li>
                    <li>
                        Intégration d’un <span>panier dynamique</span> (session utilisateur) et validation de commande
                    </li>
                    <li>
                        Dashboard gestionnaire : affichage et suivi des commandes en <span>temps réel</span>
                    </li>
                    <li>
                        Utilisation de <span>Blade</span> pour les vues et passage de données dynamiques
                    </li>
                </ul>

                <h2 class="section-title mb-3">Conclusion :</h2>
                <p>
                    ClickNeat m’a permis de passer un cap en tant que développeur full-stack. J’ai pu structurer une application complète en Laravel, en comprenant en profondeur la logique MVC, les migrations, les relations entre modèles, et la sécurisation d’une plateforme. C’est un projet concret, complet, et professionnalisant, qui m’a apporté une vraie confiance technique pour aborder des applications plus complexes.
                </p>

                <br><br>

                <h2>Les compétences développées :</h2>
                <p>
                    <a class="link" href="/skills.php"><span>Gérer le patrimoine informatique</span></a> Gestions de rôles afin de gérer les accès.
                </p>
                <p>
                    <a class="link" href="/skills.php"><span>Mettre en place ou maintenir une solution applicative :</span></a> Conception d’une architecture MVC robuste, avec gestion des rôles, données relationnelles, logique métier et interface claire.
                </p>
                <p>
                    <a class="link" href="/skills.php"><span>Travailler en autonomie et gérer un projet technique :</span></a> Réalisation du projet de A à Z : structure, développement, debug, mise en ligne, évolutions futures.
                </p>
            </div>
        </div>
    </div>
</section>
<?php
include_once('layouts/footer.php');
?>