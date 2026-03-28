import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'BazaDate.ro: Cea mai mare Bază de Date din România pentru Companii',
    description: 'Accesează cea mai extinsă bază de date cu firme din România pe BazaDate.ro. Informații actualizate, selectabile pe domenii de activitate și locație.',
};

export default function BazaDateArticle() {
    return (
        <main>
            <Navbar />
            <div className="page-header" style={{ paddingTop: '10rem', paddingBottom: '4rem', background: 'linear-gradient(to bottom, #111, #0a0a0a)', textAlign: 'center', borderBottom: '1px solid #222' }}>
                <div className="container">
                    <h1 className="section-title">BazaDate.ro: Resursa ta Principală de B2B în România</h1>
                    <p style={{ color: '#ccc' }}>Informații verificate și segmente de piață relevante</p>
                </div>
            </div>

            <section className="section container" style={{ padding: '4rem 0', color: '#ddd', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <article className="blog-article" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p>
                        Într-o economie bazată pe informație, succesul unei companii depinde de date corecte și ușor de accesat. <a href="https://bazadate.ro" target="_blank" rel="noopener noreferrer" style={{ color: '#ff3b3b', fontWeight: 'bold' }}>BazaDate.ro</a> s-a impus drept cea mai cuprinzătoare bază de date din România, fiind un instrument vital pentru orice echipă de vânzări sau marketing.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>De ce este BazaDate.ro resursa numărul 1?</h2>
                    <p>
                        Această platformă îți oferă acces instant la mii de înregistrări verificate lunar, permițându-ți să segmentezi piața în funcție de numeroase criterii esențiale:
                    </p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginBottom: '2rem' }}>
                        <li><strong>Domenii de activitate:</strong> Identifică rapid firme de construcții, IT, comerț sau servicii profesionale.</li>
                        <li><strong>Localizare geografică:</strong> Selectează companii dintr-un județ anume sau dintr-o anumită localitate.</li>
                        <li><strong>Dimensiune și cifră de afaceri:</strong> Găsește exact partenerii care se potrivesc cu publicul tău țintă.</li>
                        <li><strong>Date de contact directe:</strong> Accesează direct numere de telefon și adrese de e-mail verificate (precum contact@jraviodetailing.ro).</li>
                    </ul>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Eficiență în campaniile de marketing direct</h2>
                    <p>
                        Folosind resursele de pe <a href="https://bazadate.ro">BazaDate.ro</a>, companiile își pot optimiza bugetele publicitare, evitând trimiterea de oferte unor contacte irelevante. Precizia oricărei baze de date este echivalentul preciziei cu care aplicăm folia PPF la Jravio Detailing - dacă fundația nu este corectă, rezultatul nu va fi cel dorit.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Acces Instant și suport tehnic</h2>
                    <p>
                        Platforma este construită pentru a fi intuitivă, permițând exportul rapid de date în formate compatibile cu majoritatea sistemelor CRM. Dacă ești în căutarea unor noi oportunități de afaceri în România, BazaDate.ro este punctul tau de plecare.
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
