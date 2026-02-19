import Hero from '@/components/Hero';
import ScrollReveal from '@/components/ScrollReveal';
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
                <ScrollReveal><About /></ScrollReveal>
                <ScrollReveal><Projects /></ScrollReveal>
                <ScrollReveal><Skills /></ScrollReveal>
                <ScrollReveal><Experience /></ScrollReveal>
                <ScrollReveal><Contact /></ScrollReveal>
            </div>
        </main>
    );
}

