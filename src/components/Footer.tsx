import '@/styles/_footer.scss';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="wrapper">
                <div className="footer-content">
                    <div className="copyright">
                        <p>&copy; {currentYear} Matthis Ripoche. Tous droits réservés.</p>
                    </div>
                    <nav className="legal-nav">
                        <ul>
                            <li><a href="/legals">Mentions Légales</a></li>
                            <li><a href="#">Politique de Confidentialité</a></li>
                            <li><a href="#">CGU</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
