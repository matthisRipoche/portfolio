import '@/styles/_projects.scss';
import Link from 'next/link';

const projects = [
    {
        title: "AceIt",
        description: "Plateforme de représentation de statistiques de Sport spécialisé dans le volleyball.",
        tags: ["API REST", "Java", "Spring Boot", "TypeScript", "Angular", "PostgreSQL", "Docker"],
        image: "/ace-it.png",
        links: [
            { url: 'https://github.com/matthisRipoche/ace-it-fe', label: 'Projet Frontend' },
            { url: 'https://github.com/matthisRipoche/ace-it-be', label: 'Projet Backend' }
        ]
    },
    {
        title: "Angular Todo List",
        description: "Application de gestion de tâches avec assignation de membre.",
        tags: ["TypeScript", "Angular"],
        image: "/todolist.png",
        links: [
            { url: 'https://github.com/matthisRipoche/angular-to-do-list', label: 'Voir sur GitHub' }
        ]
    },
    {
        title: "Portail Apprenant",
        description: "Portail de gestion des apprenants du campus ESPL, permettant le suivi des différents alternants.",
        tags: ["Next.js", "Express", "Node.js", "MySQL"],
        image: "/portail-apprenant.png"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Mes Projets</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            {project.image ? (
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                <div className="placeholder-img" style={{ background: `linear-gradient(45deg, var(--components${(index % 3) + 1}), var(--border${(index % 3) + 1}))` }}></div>
                            )}
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="tag">{tag}</span>
                                ))}
                            </div>
                            {project.links && project.links.length > 0 && (
                                <div className="project-links" style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                                    {project.links.map((link, linkIndex) => (
                                        <a href={link.url} key={linkIndex} target="_blank" rel="noopener noreferrer" className="project-link">
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
