"use client";
import Link from 'next/link';
import '@/styles/_legals.scss';

export default function Legals() {
    return (
        <section className="legals-section">
            <div className="content">
                <h1>Mentions Légales</h1>

                <div className="legal-block">
                    <h2>1. Éditeur du site</h2>
                    <p>
                        Le site est édité par <strong>Matthis Ripoche</strong>, étudiant en développement web.
                    </p>
                    <p>
                        <strong>Email :</strong> <a href="mailto:matthisripoche@gmail.com">matthisripoche@gmail.com</a><br />
                        <strong>Profil LinkedIn :</strong> <a href="https://www.linkedin.com/in/matthis-ripoche-919a771a6/" target="_blank" rel="noopener noreferrer">Matthis Ripoche</a>
                    </p>
                </div>

                <div className="legal-block">
                    <h2>2. Hébergement</h2>
                    <p>
                        Ce site est hébergé par <strong>Vercel Inc.</strong><br />
                        340 S Lemon Ave #4133<br />
                        Walnut, CA 91789<br />
                        États-Unis
                    </p>
                    <p>
                        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a>
                    </p>
                </div>

                <div className="legal-block">
                    <h2>3. Propriété intellectuelle</h2>
                    <p>
                        L'ensemble du contenu de ce site (textes, images, codes informatiques, etc.) est la propriété exclusive de Matthis Ripoche, sauf mention contraire.
                        Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Matthis Ripoche.
                    </p>
                </div>

                <div className="legal-block">
                    <h2>4. Données personnelles</h2>
                    <p>
                        Ce site ne collecte aucune donnée personnelle à l'insu de l'utilisateur. Aucune information personnelle n'est cédée à des tiers.
                        Les emails envoyés via le lien de contact ne sont utilisés que pour répondre à votre demande.
                    </p>
                </div>

                <div className="legal-block">
                    <h2>5. Responsabilité</h2>
                    <p>
                        Matthis Ripoche ne saurait être tenu pour responsable des erreurs rencontrées sur le site, problèmes techniques, interprétation des informations publiée et conséquences de leur utilisation.
                        En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
                    </p>
                </div>

                <Link href="/" className="back-link">
                    ← Retour à l'accueil
                </Link>
            </div>
        </section>
    );
}
