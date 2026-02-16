import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Main() {

    return (
        <main>
            <div className="wrapper">
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
            </div>
        </main>
    );
}

