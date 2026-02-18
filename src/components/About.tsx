import '@/styles/_about.scss';

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="content">
                <h2 className="section-title">À propos de moi</h2>
                <div className="bio">
                    <p>
                        Actuellement étudiant en développement web, je suis passionné par la création d'applications modernes et intuitives.
                        J'aime relever des défis techniques et apprendre de nouvelles technologies pour concevoir des solutions efficaces.
                    </p>
                    <p>
                        Développeur Fullstack (React/Node.js) en transition vers l'écosystème Java Spring Boot & Angular. Rigoureux et curieux, je cherche à mettre mon dynamisme et ma capacité d'adaptation au profit d'une alternance centrée sur des architectures logicielles pérennes.
                    </p>
                </div>
            </div>
        </section>
    );
}