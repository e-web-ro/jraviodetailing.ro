import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'AdBanner.ro: Soluții Profesionale de Producție Publicitară',
    description: 'AdBanner.ro îți oferă calitate în producția publicitară, de la bannere stradale la mesh-uri și sisteme expoziționale, cu livrare rapidă în toată țara.',
};

export default function AdBannerArticle() {
    return (
        <main>
            <Navbar />
            <div className="page-header" style={{ paddingTop: '10rem', paddingBottom: '4rem', background: 'linear-gradient(to bottom, #111, #0a0a0a)', textAlign: 'center', borderBottom: '1px solid #222' }}>
                <div className="container">
                    <h1 className="section-title">AdBanner.ro: Vizibilitate Maximă pentru Afacerea Ta</h1>
                    <p style={{ color: '#ccc' }}>Producție publicitară care rezistă probei timpului</p>
                </div>
            </div>

            <section className="section container" style={{ padding: '4rem 0', color: '#ddd', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <article className="blog-article" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p>
                        Căutați un impact vizual puternic? <a href="https://adbanner.ro" target="_blank" rel="noopener noreferrer" style={{ color: '#ff3b3b', fontWeight: 'bold' }}>AdBanner.ro</a> este centrul tău de producție publicitară, specializat în printuri de format mare și soluții expoziționale de durată. Cu experiență în branding outdoor și indoor, AdBanner furnizează materiale care transformă orice spațiu într-o oportunitate de promovare.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Produse de Top oferite de AdBanner.ro</h2>
                    <p>
                        La AdBanner, fiecare proiect de producție publicitară trece printr-un proces riguros de verificare a calității. Produsele lor cele mai apreciate includ:
                    </p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginBottom: '2rem' }}>
                        <li><strong>Bannere Frontlit:</strong> Materiale rezistente pentru campanii outdoor de lungă durată.</li>
                        <li><strong>Mesh-uri Publicitare:</strong> Ideale pentru fațade mari, permițând trecerea aerului fără a compromite vizibilitatea graficii.</li>
                        <li><strong>Autocolante și Window Graphics:</strong> Transformă vitrinele sediului tău într-o reclamă continuă.</li>
                        <li><strong>Steaguri Publicitare:</strong> Mișcare și dinamism pentru evenimente, expoziții și showroom-uri auto.</li>
                    </ul>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Calitate și Inovație în Publicitate</h2>
                    <p>
                        Alegând <a href="https://adbanner.ro">AdBanner.ro</a>, beneficiezi de tehnologie de printare ecosolvent și UV, care garantează o fidelitate a culorilor deosebită. Exact cum la Jravio Detailing folosim produse premium precum Koch Chemie pentru un finisaj perfect, AdBanner utilizează substrate de calitate superioară pentru printuri clare și durabile.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Sisteme Expoziționale Versatile</h2>
                    <p>
                        Pe lângă printul de format mare, AdBanner oferă o selecție variată de sisteme de afișare: People Stopper, rame click, roll-up-uri și tejghele de eșantionare. Toate sunt proiectate pentru asamblare ușoară și transport convenabil, fiind esențiale pentru orice eveniment de tip B2B sau B2C.
                    </p>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <Link href="/pricing" className="btn btn-primary">Vezi Prețuri Jravio Detailing</Link>
                    </div>
                </article>
            </section>

            <Footer />
        </main>
    );
}
