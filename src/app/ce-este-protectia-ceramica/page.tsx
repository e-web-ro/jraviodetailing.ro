import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Ce este protectia ceramica si cat dureaza? - Jravio Detailing',
    description: 'Protectia ceramica auto explica pe intelesul tuturor. Afla diferentele fata de ceara, cat rezista si de ce merita aplicata pe masina ta.',
};

export default function ProtectieCeramica() {
    return (
        <main>
            <Navbar />
            <div className="page-header" style={{ paddingTop: '10rem', paddingBottom: '4rem', background: 'linear-gradient(to bottom, #111, #0a0a0a)', textAlign: 'center', borderBottom: '1px solid #222' }}>
                <div className="container">
                    <h1 className="section-title">Ce este Protectia Ceramica?</h1>
                    <p style={{ color: '#ccc' }}>Luciu extrem si curatare usoara</p>
                </div>
            </div>

            <section className="section container" style={{ padding: '4rem 0', color: '#ddd', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <article className="blog-article">
                    <p>
                        Protectia ceramica (Ceramic Coating) a revolutionat industria de detailing. Spre deosebire de ceara traditionala care se "aseaza" pe vopsea si rezista cateva luni, ceramica se leaga chimic de lacul masinii, formand un strat permanent sau semi-permanent extrem de dur.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Cum functioneaza?</h2>
                    <p>
                        La nivel microscopic, lacul masinii nu este perfect neted; are pori si imperfectiuni. Protectia ceramica umple acesti pori, creand o suprafata perfect plana si incredibil de alunecoasa. Rezultatul? Murdaria nu mai are de ce sa adere.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Beneficiile Ceramicii Auto</h2>
                    <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginBottom: '2rem' }}>
                        <li><strong>Efect Hidrofob:</strong> Apa si murdaria aluneca instantaneu (efectul de "lotus"). Masina se spala mult mai usor si ramane curata mai mult timp.</li>
                        <li><strong>Protectie UV:</strong> Impiedica oxidarea si matuirea lacului sub actiunea razelor solare.</li>
                        <li><strong>Luciu de Oglinda:</strong> Ofera o profunzime a culorii (efectul "wet look") greu de egalat de alte produse.</li>
                        <li><strong>Rezistenta Chimica:</strong> Protejeaza impotriva ploilor acide si a solutiilor alcaline de la spalatorii.</li>
                    </ul>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Ceramica vs. PPF</h2>
                    <p>
                        Este important de stiut: <strong>Ceramica NU protejeaza impotriva zgarieturilor fizice adanci sau pietricelelor.</strong> Pentru asta exista folia PPF. Ideal este combinatia celor doua: PPF pe zonele expuse impactului si ceramica pe restul masinii (sau chiar peste PPF) pentru luciu si curatare usoara.
                    </p>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <Link href="/pricing" className="btn btn-primary">Vezi Pachetele Gold & Platinum</Link>
                    </div>
                </article>
            </section>

            <Footer />
        </main>
    );
}
