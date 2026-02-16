import '@/styles/_projects.scss';
import Image from 'next/image';

const projects = [
    {
        title: "E-commerce Dashboard",
        description: "Une interface d'administration complète pour gérer les produits, les commandes et les clients. Inclut des graphiques interactifs et des rapports en temps réel.",
        tags: ["React", "Next.js", "Tailwind CSS", "Recharts"],
        image: "/public/project1.jpg", // Placeholder - will need actual image or use a color block
        link: "#"
    },
    {
        title: "Task Management App",
        description: "Application de gestion de tâches collaborative avec fonctionnalités de glisser-déposer, assignation de membres et notifications en temps réel.",
        tags: ["Vue.js", "Firebase", "Pinia", "Sass"],
        image: "/public/project2.jpg",
        link: "#"
    },
    {
        title: "Weather Forecast API",
        description: "Service API RESTful fournissant des prévisions météorologiques précises basées sur la géolocalisation de l'utilisateur.",
        tags: ["Node.js", "Express", "MongoDB", "Docker"],
        image: "/public/project3.jpg",
        link: "#"
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
                            {/* Placeholder for project image since we don't have real ones yet using a colored div */}
                            <div className="placeholder-img" style={{ background: `linear-gradient(45deg, var(--components${(index % 3) + 1}), var(--border${(index % 3) + 1}))` }}></div>
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="tag">{tag}</span>
                                ))}
                            </div>
                            <a href={project.link} className="project-link">Voir le projet</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
