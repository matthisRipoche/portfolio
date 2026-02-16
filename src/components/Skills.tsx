import '@/styles/_skills.scss';

const skillsData = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Redux"],
    Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    Tools: ["Git", "Docker", "VS Code", "Figma", "Jest", "CI/CD"]
};

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Compétences Techniques</h2>
            <div className="skills-container">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div className="skill-category" key={category}>
                        <h3>{category}</h3>
                        <div className="skills-list">
                            {skills.map((skill, index) => (
                                <div className="skill-item" key={index}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
