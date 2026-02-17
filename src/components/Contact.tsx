"use client";

import '@/styles/_contact.scss';

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">Me Contacter</h2>
            <div className="content">
                <div className="contact-info">
                    <p>
                        Intéressé par une collaboration ? N'hésitez pas à me contacter via ce formulaire ou directement par email.
                        Je suis toujours ouvert à de nouveaux projets et opportunités.
                    </p>
                    <ul>
                        <li>
                            <strong>Email:</strong>
                            <a href="mailto:matthisripoche@gmail.com">matthisripoche@gmail.com</a>
                        </li>
                        <li>
                            <strong>LinkedIn:</strong>
                            <a href="https://www.linkedin.com/in/matthis-ripoche-919a771a6/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/matthis-ripoche-919a771a6/</a>
                        </li>
                        <li>
                            <strong>GitHub:</strong>
                            <a href="https://github.com/matthisRipoche" target="_blank" rel="noopener noreferrer">https://github.com/matthisRipoche</a>
                        </li>
                    </ul>
                </div>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" name="name" placeholder="Votre nom" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="votre@email.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={5} placeholder="Votre message..." required></textarea>
                    </div>
                    <button type="submit" className="btn-submit">Envoyer le message</button>
                </form>
            </div>
        </section>
    );
}
