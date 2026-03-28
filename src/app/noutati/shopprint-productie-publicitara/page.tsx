import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Shopprint.ro: Productie Publicitara de Calitate în București',
    description: 'Află de ce Shopprint.ro este partenerul tău de încredere pentru servicii de producție publicitară premium, de la bannere la sisteme expoziționale complexe.',
};

export default function ShopprintArticle() {
    return (
        <main>
            <Navbar />
            <div className="page-header" style={{ paddingTop: '10rem', paddingBottom: '4rem', background: 'linear-gradient(to bottom, #111, #0a0a0a)', textAlign: 'center', borderBottom: '1px solid #222' }}>
                <div className="container">
                    <h1 className="section-title">Shopprint.ro: Expertul tău în Producție Publicitară</h1>
                    <p style={{ color: '#ccc' }}>Soluții vizuale profesionale pentru afacerea ta</p>
                </div>
            </div>

            <section className="section container" style={{ padding: '4rem 0', color: '#ddd', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <article className="blog-article" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p>
                        Într-o lume tot mai competitivă, imaginea afacerii tale contează enorm. <a href="https://shopprint.ro" target="_blank" rel="noopener noreferrer" style={{ color: '#ff3b3b', fontWeight: 'bold' }}>Shopprint.ro</a> este un nume de referință în domeniul producției publicitare, oferind o gamă completă de servicii menite să scoată în evidență orice proiect vizual.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Servicii de Producție Publicitară Oferite de Shopprint</h2>
                    <p>
                        Echipa Shopprint îmbină tehnologia de ultimă generație cu experiența vastă pentru a livra produse care impresionează prin calitate și durabilitate. Printre cele mai solicitate servicii se numără:
                    </p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginBottom: '2rem' }}>
                        <li><strong>Print în format mare:</strong> Bannere, mesh-uri și autocolante publicitare de mari dimensiuni, rezistente la factorii de mediu.</li>
                        <li><strong>Sisteme expoziționale:</strong> Roll-up-uri, pop-up-uri și standuri personalizate pentru evenimente și târguri.</li>
                        <li><strong>Decorări auto și vitrine:</strong> Infolieri profesionale care transformă vehiculele de companie în campanii de marketing mobile.</li>
                        <li><strong>Materiale POS:</strong> Wobblere, display-uri și alte soluții de atragere a atenției în punctele de vânzare.</li>
                    </ul>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>De ce să alegi Shopprint.ro?</h2>
                    <p>
                        Alegerea partenerului potrivit pentru producția publicitară este esențială. La <a href="https://shopprint.ro">Shopprint.ro</a>, accentul cade pe detaliu și pe livrarea la timp. Utilizând utilaje moderne (Rupes, Gyeon - tehnologii de print și finisare de top), asigură culori vibrante și finisaje impecabile.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Cum ne putem integra serviciile?</h2>
                    <p>
                        Fie că ești o agenție de publicitate sau un business care are nevoie de branding, colaborarea cu Shopprint îți oferă garanția unui rezultat profesional. Exact ca în detailing-ul auto de la Jravio Detailing, precizia și atenția la detalii sunt factorii care fac diferența între un produs mediocru și unul premium.
                    </p>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <Link href="/pricing" className="btn btn-primary">Vezi Serviciile Jravio Detailing</Link>
                    </div>
                </article>
            </section>

            <Footer />
        </main>
    );
}
