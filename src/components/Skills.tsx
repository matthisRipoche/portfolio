import '@/styles/_skills.scss';

const skillsData = {
    Frontend: ["React", "TypeScript", "Angular", "HTML5/CSS3"],
    Backend: ["Java", "SpringBoot", "PostgreSQL", "REST APIs"],
    Tools: ["Git", "Docker", "CI/CD"]
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
