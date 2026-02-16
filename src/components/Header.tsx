import '@/styles/_header.scss'

export default function Header() {
    return (
        <header>
            <div className='wrapper'>
                <div className='content'>
                    <p>Matthis Ripoche</p>

                    <nav>
                        <ul>
                            <li><a href="#about">Présentation</a></li>
                            <li><a href="#projects">Projets</a></li>
                            <li><a href="#skills">Compétences</a></li>
                            <li><a href="#experience">Expérience</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );

}
