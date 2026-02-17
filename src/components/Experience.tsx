import '@/styles/_experience.scss';

const experienceData = [
    {
        role: "Alternance",
        company: "Groupes Eduservices ESPL Angers",
        period: "2025 - 2026",
        description: "Développement de composants React et intégration de maquettes. Participation aux réunions techniques et code reviews. Amélioration de l'accessibilité du site vitrine d'un client majeur."
    },
    {
        role: "Altenance",
        company: "Studio Stack",
        period: "2024-2025",
        description: "Intégration de sites Wordpress en utilisant le plugin ACF, avec une attention spécial sur l'accessibilité des sites."
    }
];

export default function Experience() {
    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">Expérience Professionnelle</h2>
            <div className="timeline">
                {experienceData.map((item, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">{item.period}</div>
                        <div className="timeline-content">
                            <h3>{item.role}</h3>
                            <div className="company">{item.company}</div>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
