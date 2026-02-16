import '@/styles/_about.scss';

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="content">
                <h2 className="section-title">À propos de moi</h2>
                <div className="bio">
                    <p>
                        Développeur Full Stack passionné avec plus de 5 ans d'expérience dans la création d'applications web robustes et évolutives.
                        J'aime transformer des idées complexes en solutions simples et élégantes.
                    </p>
                    <p>
                        Spécialisé dans l'écosystème JavaScript (React, Next.js, Node.js), je porte une attention particulière à la performance,
                        l'accessibilité et l'expérience utilisateur. J'ai travaillé sur divers projets, allant de sites e-commerce à des tableaux de bord analytiques complexes.
                    </p>
                    <div className="stats">
                        <div className="stat-item">
                            <span className="number">3+</span>
                            <span className="label">Années d'expérience</span>
                        </div>
                        <div className="stat-item">
                            <span className="number">50+</span>
                            <span className="label">Projets réalisés</span>
                        </div>
                        <div className="stat-item">
                            <span className="number">20+</span>
                            <span className="label">Clients satisfaits</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
