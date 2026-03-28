import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Ce este folia PPF (Paint Protection Film)? - Jravio Detailing',
    description: 'Afla totul despre folia de protectie PPF: ce este, cum functioneaza, beneficii si de ce este cea mai buna investitie pentru vopseaua masinii tale.',
};

export default function CeEstePPF() {
    return (
        <main>
            <Navbar />
            <div className="page-header" style={{ paddingTop: '10rem', paddingBottom: '4rem', background: 'linear-gradient(to bottom, #111, #0a0a0a)', textAlign: 'center', borderBottom: '1px solid #222' }}>
                <div className="container">
                    <h1 className="section-title">Ce este Folia PPF?</h1>
                    <p style={{ color: '#ccc' }}>Ghid complet despre Paint Protection Film</p>
                </div>
            </div>

            <section className="section container" style={{ padding: '4rem 0', color: '#ddd', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <article className="blog-article">
                    <p>
                        Daca esti pasionat de masina ta sau pur si simplu vrei sa ii pastrezi valoarea in timp, probabil ai auzit de termenul <strong>PPF (Paint Protection Film)</strong>. Dar ce este, mai exact, si de ce este considerat "standardul de aur" in protectia vopselei auto?
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Definitie si Compozitie</h2>
                    <p>
                        Folia PPF este o pelicula transparenta din uretan termoplastic, incredibil de rezistenta si elastica. Aceasta este aplicata direct pe suprafata vopsita a masinii pentru a o proteja de factori externi daunatori. Initial dezvoltata pentru armata americana pentru a proteja palele elicopterelor de nisip, tehnologia a evoluat enorm si a devenit accesibila pentru industria auto.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Principalele Avantaje ale Foliei PPF</h2>
                    <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginBottom: '2rem' }}>
                        <li><strong>Autovindecare (Self-Healing):</strong> Aceasta este probabil cea mai impresionanta caracteristica. Zgarieturile fine cauzate de spalari incorecte sau stergere dispar singure la contactul cu caldura (soare sau apa calda).</li>
                        <li><strong>Rezistenta la Impact:</strong> absoarbe socul pietricelelor de pe drum, prevenind ciupiturile (stone chips) care, in timp, duc la rugina.</li>
                        <li><strong>Protectie UV si Chimica:</strong> Previne decolorarea vopselei cauzata de soare si protejeaza impotriva excrementelor de pasari, rasinii de copac si solutiilor de degivrare.</li>
                        <li><strong>Invizibilitate:</strong> O folie PPF de calitate, montata profesional, este practic invizibila. Ea nu schimba textura sau culoarea masinii, ba chiar poate oferi un luciu suplimentar.</li>
                    </ul>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Merita Investitia?</h2>
                    <p>
                        Desi costul initial poate parea ridicat in comparatie cu o simpla ceruire, PPF-ul este o investitie pe termen lung. Gandeste-te la cat costa revopsirea corecta a unei capote sau a unei bari fata. Cu folia PPF, masina ta va arata ca noua ani la rand, ceea ce ii va creste semnificativ valoarea de revanzare.
                    </p>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <Link href="/pricing" className="btn btn-primary">Vezi Preturile pentru PPF</Link>
                    </div>
                </article>
            </section>

            <Footer />
        </main>
    );
}
