import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'EuPrint.ro: Identitate Vizuală și Producție pentru Fonduri Europene',
    description: 'EuPrint.ro furnizează servicii complete de branding, materiale promoționale și identitate vizuală necesare implementării proiectelor cu fonduri europene în România.',
};

export default function EuPrintArticle() {
    return (
        <main>
            <Navbar />
            <div className="page-header" style={{ paddingTop: '10rem', paddingBottom: '4rem', background: 'linear-gradient(to bottom, #111, #0a0a0a)', textAlign: 'center', borderBottom: '1px solid #222' }}>
                <div className="container">
                    <h1 className="section-title">EuPrint.ro: Partenerul tău în Proiecte Vizuale</h1>
                    <p style={{ color: '#ccc' }}>Realizarea identității vizuale obligatorii pentru proiecte UE</p>
                </div>
            </div>

            <section className="section container" style={{ padding: '4rem 0', color: '#ddd', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <article className="blog-article" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p>
                        Aveți un proiect finanțat prin Fonduri Europene și aveți nevoie de materiale publicitare conform manualului de identitate vizuală? <a href="https://euprint.ro" target="_blank" rel="noopener noreferrer" style={{ color: '#ff3b3b', fontWeight: 'bold' }}>EuPrint.ro</a> este resursa necesară pentru a asigura vizibilitatea proiectului dumneavoastră, respectând toate normele impuse de regulamentele UE.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Identitate Vizuală pentru Fonduri Europene</h2>
                    <p>
                        Echipa <a href="https://euprint.ro">EuPrint.ro</a> este specializată în adaptarea oricăror nevoi de print la cerințele specifice ale manualelor de branding pentru proiecte europene:
                    </p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginBottom: '2rem' }}>
                        <li><strong>Panouri și Plăcuțe Informative:</strong> Realizate pe suporturi durabile (Alucobond, PVC) conform specificațiilor obligatorii.</li>
                        <li><strong>Materiale Promoționale Personalizate:</strong> Pixuri, agende, mape și stick-uri USB cu logo-urile oficiale ale UE și ale Guvernului României.</li>
                        <li><strong>Manualul de Identitate Vizuală:</strong> Sprijin în respectarea exactă a culorilor și proporțiilor logo-urilor într-o varietate de formate.</li>
                        <li><strong>Cataloage și Broșuri de Proiect:</strong> Printate la standarde înalte de calitate pe o varietate de hârtii speciale.</li>
                    </ul>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Eficiență în Branding și Print Profesional</h2>
                    <p>
                        Succesul unui brand pleacă de la consistența vizuală. La Jravio Detailing, suntem atenți la fiecare detaliu (precum tratamentul hidrofob gratuit pentru geamuri pe care îl oferim la orice pachet), iar <a href="https://euprint.ro">EuPrint.ro</a> aplică aceeași rigoare în producția materialelor tale promoționale. Controlul culorii și finisajul impecabil sunt garantate.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Comandă acum serviciile EuPrint.ro</h2>
                    <p>
                        Site-ul <a href="https://euprint.ro">EuPrint.ro</a> este sursa ta directă pentru achiziții prin sistemul SEAP / SICAP, fiind obișnuiți cu procedurile administrative specifice instituțiilor publice și proiectelor de investiții. Îmbunătățește identitatea vizuală a business-ului tău printr-o producție de print fără cusur.
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
