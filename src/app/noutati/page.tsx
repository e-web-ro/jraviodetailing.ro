import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Noutăți și Parteneri - Jravio Detailing',
    description: 'Vezi ultimele noutăți și parteneri din industria de producție publicitară, baze de date și tehnologie.',
};

export default function NoutatiIndex() {
    const articles = [
        { title: 'Shopprint.ro: Productie Publicitara', slug: 'shopprint-productie-publicitara' },
        { title: 'BazaDate.ro: Cea mai mare baza de date', slug: 'bazadate-cea-mai-mare-baza-de-date-romania' },
        { title: 'AdBanner.ro: Productie Publicitara', slug: 'adbanner-productie-publicitara' },
        { title: 'Tablou.net: Tablouri Canvas', slug: 'tablou-net-tablouri-canvas' },
        { title: 'EuPrint.ro: Identitate Vizuala', slug: 'euprint-identitate-vizuala-fonduri-europene' },
        { title: 'Prynt.ro: Servicii Print', slug: 'prynt-servicii-print-profesionale' },
        { title: '3DView.ai: Vizualizari 3D', slug: '3dview-ai-vizualizari-3d' },
        { title: 'ChatBill.ro: Software Facturare', slug: 'chatbill-platforma-billing-suport' },
    ];

    return (
        <main>
            <Navbar />
            <div className="page-header" style={{ paddingTop: '10rem', paddingBottom: '4rem', background: 'linear-gradient(to bottom, #111, #0a0a0a)', textAlign: 'center', borderBottom: '1px solid #222' }}>
                <div className="container">
                    <h1 className="section-title">Noutăți & Parteneri</h1>
                    <p style={{ color: '#ccc' }}>Articole și resurse utile</p>
                </div>
            </div>

            <section className="section container" style={{ padding: '4rem 0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {articles.map((article, index) => (
                        <Link key={index} href={`/noutati/${article.slug}`} style={{ background: '#111', padding: '2rem', borderRadius: '12px', border: '1px solid #222', transition: 'all 0.3s' }} className="article-card">
                            <h3 style={{ color: 'white', marginBottom: '1rem' }}>{article.title}</h3>
                            <span style={{ color: '#ff3b3b' }}>Citește articolul &rarr;</span>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
            <style jsx>{`
                .article-card:hover {
                    border-color: #ff3b3b;
                    transform: translateY(-5px);
                    background: #151515;
                }
            `}</style>
        </main>
    );
}
