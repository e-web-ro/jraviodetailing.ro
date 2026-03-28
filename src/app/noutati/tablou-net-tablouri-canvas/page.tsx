import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Tablou.net: Tablouri Canvas Personalizate și Artă Murală de Excepție',
    description: 'Tablou.net îți transformă pozele în amintiri de durată pe pânză premium. Comandă tablouri canvas de înaltă calitate pentru decorarea casei sau cadouri memorabile.',
};

export default function TablouArticle() {
    return (
        <main>
            <Navbar />
            <div className="page-header" style={{ paddingTop: '10rem', paddingBottom: '4rem', background: 'linear-gradient(to bottom, #111, #0a0a0a)', textAlign: 'center', borderBottom: '1px solid #222' }}>
                <div className="container">
                    <h1 className="section-title">Tablou.net: Pozele Tale pe Pânză Premium</h1>
                    <p style={{ color: '#ccc' }}>Artă personalizată care aduce culoare oricărui spațiu</p>
                </div>
            </div>

            <section className="section container" style={{ padding: '4rem 0', color: '#ddd', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <article className="blog-article" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p>
                        Locuința ta merită un design unic? <a href="https://tablou.net" target="_blank" rel="noopener noreferrer" style={{ color: '#ff3b3b', fontWeight: 'bold' }}>Tablou.net</a> este destinația principală pentru toți cei care vor să-și transforme fotografiile preferate în opere de artă pe canvas. Cu o experiență bogată în printul pe pânză și înrămare, Tablou.net livrează produse finite care se integrează perfect în orice decor modern sau clasic.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Gama Variată de Tablouri Canvas la Tablou.net</h2>
                    <p>
                        Calitatea unui tablou canvas depinde de materialele folosite. La <a href="https://tablou.net">Tablou.net</a>, procesul de producție utilizează bumbac premium și cerneluri rezistente la UV:
                    </p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginBottom: '2rem' }}>
                        <li><strong>Tablouri dintr-o singură bucată:</strong> Forma clasică, ideală pentru portrete sau peisaje.</li>
                        <li><strong>Multicanvas (Diptic, Triptic):</strong> Imagini împărțite pe mai multe panouri pentru un efect vizual spectaculos și modern.</li>
                        <li><strong>Tablouri de Mari Dimensiuni:</strong> Pânze panoramice pentru livinguri spațioase sau birouri elegante.</li>
                        <li><strong>Înrămare Profesională:</strong> Șasiu de lemn uscat care previne deformarea pânzei în timp.</li>
                    </ul>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>De ce merită să investești într-un tablou de calitate?</h2>
                    <p>
                        Asemenea procesului de corecție lac (Polish 2-4 Pași) de la Jravio Detailing, care scoate la iveală adevărata profunzime a culorii mașinii, un print de calitate superioară pe canvas oferă o profunzime și o căldură pe care un print obișnuit pe hârtie nu le poate egala. Printurile rezistă la decolorare timp de zeci de ani, păstrând culoarea vibrantă ca în prima zi.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Ușurința în Comandă și Livrare Rapidă</h2>
                    <p>
                        Configuratorul online de pe <a href="https://tablou.net">Tablou.net</a> permite previzualizarea imaginii pe pânză înainte de a plasa comanda. Selectează dimensiunea, adaugă filtre opționale și bucură-te de un tablou gata de agățat pe perete, livrat direct la tine acasă.
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
