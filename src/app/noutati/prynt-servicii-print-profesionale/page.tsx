import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Prynt.ro: Tipografie Digitală și Servicii de Print Profesionale',
    description: 'Prynt.ro oferă soluții complete de print digital și offset. De la cărți de vizită la flyere și cataloage, calitatea de neegalat la prețuri competitive.',
};

export default function PryntArticle() {
    return (
        <main>
            <Navbar />
            <div className="page-header" style={{ paddingTop: '10rem', paddingBottom: '4rem', background: 'linear-gradient(to bottom, #111, #0a0a0a)', textAlign: 'center', borderBottom: '1px solid #222' }}>
                <div className="container">
                    <h1 className="section-title">Prynt.ro: Tipărire de Înaltă Calitate</h1>
                    <p style={{ color: '#ccc' }}>Servicii rapide și precise pentru orice nevoie de business</p>
                </div>
            </div>

            <section className="section container" style={{ padding: '4rem 0', color: '#ddd', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <article className="blog-article" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p>
                        Aveți nevoie de un partener de print pe care să vă puteți baza? <a href="https://prynt.ro" target="_blank" rel="noopener noreferrer" style={{ color: '#ff3b3b', fontWeight: 'bold' }}>Prynt.ro</a> oferă servicii de tipografie digitală și offset la standarde internaționale. Folosind echipamente digitale de ultimă generație, Prynt.ro livrează produse finite care strălucesc prin claritate și fidelitate cromatică.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Serviciile de Tipar de pe Prynt.ro</h2>
                    <p>
                        Gama de servicii acoperă aproape toate nevoile de promovare pe hârtie ale unei companii:
                    </p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginBottom: '2rem' }}>
                        <li><strong>Cărți de Vizită:</strong> Diverse texturi de carton, plastifieri soft-touch și finisaje speciale.</li>
                        <li><strong>Flyere și Pliante:</strong> Instrumente de marketing eficiente, create rapid pentru distribuții largi.</li>
                        <li><strong>Mape de Prezentare și Cataloage:</strong> O imagine profesională a proiectelor dumneavoastră.</li>
                        <li><strong>Print Digital de Mare Viteză:</strong> Ideal pentru tiraje mici și medii, cu timp de livrare record.</li>
                    </ul>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Evoluție în Tehnologia de Print</h2>
                    <p>
                        Prynt.ro utilizează tehnologia ecosolvent de la furnizori precum Gyeon și Rupes pentru a asigura nu doar un aspect vizual plăcut, ci și o rezistență ridicată a materialelor în timp. Exact cum folosim "Polish 2-4 Pași (Corecție Lac)" la Jravio Detailing pentru a revitaliza vopseaua, Prynt.ro revitalizează imaginea business-ului tău prin printuri vibrante.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Accesibil și Rapid</h2>
                    <p>
                        Comanda pe <a href="https://prynt.ro">Prynt.ro</a> este un proces simplificat, creat pentru a salva timpul clienților. Încărcați fișierele grafice, alegeți suportul de print și restul este sarcina experților de la Prynt.ro, care se asigură că livrarea este promptă în București și în țară.
                    </p>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <Link href="/pricing" className="btn btn-primary">Vezi Servicii Jravio Detailing</Link>
                    </div>
                </article>
            </section>

            <Footer />
        </main>
    );
}
