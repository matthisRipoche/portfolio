import '@/styles/_experience.scss';

const experienceData = [
    {
        role: "Senior Frontend Developer",
        company: "TechSolutions Inc.",
        period: "2023 - Present",
        description: "En charge du développement de l'interface utilisateur de la plateforme SaaS principale. Migration progressive vers Next.js et amélioration des performances Web Vitals."
    },
    {
        role: "Full Stack Developer",
        company: "Creative Agency",
        period: "2020 - 2023",
        description: "Développement de sites vitrines et e-commerce pour divers clients. Mise en place de CMS headless (Strapi) et intégration avec des frontends React."
    },
    {
        role: "Junior Web Developer",
        company: "StartUp Lab",
        period: "2018 - 2020",
        description: "Participation au développement d'une application mobile hybride. Maintenance et évolution de l'API REST existante."
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
