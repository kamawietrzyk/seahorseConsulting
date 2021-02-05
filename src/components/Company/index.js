import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCopyright, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Company = () => (
    <>
        <h1>Kreatywny copywriting dla ludzi z pasj<span className="font">ą</span>!</h1>
        <div className="Company" id="company">
            <div className="Company-main">
                <h2>Firma</h2>
                <hr className="h-underline" />
                <p>Konik morski – symbol bogatej wyobraźni oraz kreatywności, ale także siły i wytrwałości. Przez żeglarzy uważany był za symbol szczęścia. Stąd też stał się moim znakiem firmowym.</p>
                <p>Kreatywność jest podstawowym i nieodłącznym elementem w tej branży – czy to w zakresie marketingu i PR, czy copywritingu. Jest bazą, na której buduję z Klientem naszą współpracę. Nieszablonowe pomysły na promocję marki przeobrażam w słowo pisane, dostosowane do wymogów świata on-line, prowadzę działania w mediach społecznościowych i projektuję strategię rozwoju.</p>
                <p>Doświadczenie w wielu branżach pozwala mi na dostosowanie narzędzi do różnych projektów oraz na kreowanie tekstów mówiących językiem korzyści dla każdego Klienta.</p>
                <h4>„Jeżeli koncepcja od samego początku nie jest szalona, nie ma dla niej żadnej nadziei.”</h4>
                <h5>~ Albert Einstein</h5>
            </div>
            <div className="Company-grid">
                <div className="Company-grid_one">
                    <FontAwesomeIcon icon={faCopyright} size="3x" />
                    <h4>Copywriting</h4>
                    <p>"Na początku było słowo...", czyli tworzenie tekstów na potrzeby reklamy i marketingu. Tekstów, które docierają do potencjalnych klientów, mówią językiem ich korzyści, dają odpowiedź na ich potrzeby i budują zaufanie do marki, a w konsekwencji zachęcają do skorzystania z usługi czy zakupu danego produktu. Wszystko ma swój początek w wartościowej treści reklamowej.</p>
                </div>
                <div className="Company-grid_two">
                    <FontAwesomeIcon icon={faFileAlt} size="3x" />
                    <h4>Tłumaczenia</h4>
                    <p>Tłumaczenie tekstów z i na język niemiecki – głównie z doświadczeniem w tekstach technicznych oraz marketingowych, jednakże zakres tematyczny tekstu źródłowego może być dowolny. Oprócz tłumaczeń pisemnych dostępna jest także opcja tłumaczeń ustnych.</p>
                </div>
                <div className="Company-grid_three">
                    <FontAwesomeIcon icon={faUsers} size="3x" />
                    <h4>PR</h4>
                    <p>Kreowanie wizerunku firmy, jej tożsamości oraz utrzymywanie stałego dialogu i kontaktu z otoczeniem, rozumiane także poprzez prowadzenie działań w mediach społecznościowych, które są aktualnie jednym z najważniejszych motorów napędzających pozyskiwanie klientów i aktywną sprzedaż.</p>
                </div>
            </div>
        </div>
    </>
)

export default Company