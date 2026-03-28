import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Avantajele Detailing-ului Auto Profesional - Jravio Detailing',
    description: 'De ce sa alegi un detailing profesional? Descopera cum o intretinere corecta prelungeste viata masinii, imbunatateste aspectul si creste valoarea de revanzare.',
};

export default function AvantajeDetailing() {
    return (
        <main>
            <Navbar />
            <div className="page-header" style={{ paddingTop: '10rem', paddingBottom: '4rem', background: 'linear-gradient(to bottom, #111, #0a0a0a)', textAlign: 'center', borderBottom: '1px solid #222' }}>
                <div className="container">
                    <h1 className="section-title">De ce Detailing Auto Profesional?</h1>
                    <p style={{ color: '#ccc' }}>Mai mult decat o simpla spalare</p>
                </div>
            </div>

            <section className="section container" style={{ padding: '4rem 0', color: '#ddd', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <article className="blog-article">
                    <p>
                        Multi confunda detailing-ul cu o spalatorie de cartier. Diferenta este insa uriasa, atat in proces, cat si in rezultate. Detailing-ul auto este procesul meticulos de curatare, restaurare si protejare a tuturor suprafetelor masinii, interior si exterior.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>1. Mentinerea Valorii Masinii</h2>
                    <p>
                        O masina intretinuta vizual se vinde mult mai repede si la un pret mai bun. Un istoric de detailing dovedeste ca proprietarul a avut grija de vehicul. O protectie ceramica sau PPF este un atu major la revanzare.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>2. Igiena si Sanatate (Interior)</h2>
                    <p>
                        Interiorul masinii poate gazdui mii de bacterii in volan, scaune si sistemul de ventilatie. Un detailing interior complet include curatarea cu aburi si igienizarea cu ozon, eliminand mirosurile neplacute, bacteriile si alergenii. Este esential mai ales daca ai copii sau animale de companie.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>3. Prevenirea Problemelor Majore</h2>
                    <p>
                        Curatarea regulata a contaminantilor (gudron, fier, seva de copac) previne coroziunea lacului. Hidratarea pielii previne craparea acesteia. O intretinere preventiva este intotdeauna mai ieftina decat o reparatie ulterioara (vopsire sau retapitare).
                    </p>

                    <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Concluzie</h2>
                    <p>
                        Detailing-ul nu este doar un moft pentru masinile de lux. Este o forma de respect pentru bunul tau si o investitie inteligenta. La Jravio Detailing, tratam fiecare masina cu aceeasi atentie la detalii, indiferent de marca sau vechime.
                    </p>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <Link href="/servicii" className="btn btn-outline">Descopera Serviciile Noastre</Link>
                    </div>
                </article>
            </section>

            <Footer />
        </main>
    );
}
