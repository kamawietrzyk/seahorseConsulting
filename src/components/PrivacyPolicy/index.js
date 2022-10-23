import React from 'react';
import { faArrowCircleLeft, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import URLS from '../../utils/urls';
import './styles.scss';
import ScrollToTop from '../ScrollToTop';

const PrivacyPolicy = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <ScrollToTop />
            <div className="PrivacyPolicy">
                <Link to={URLS.HOME}>
                    <FontAwesomeIcon className="PrivacyPolicy-icon" icon={faArrowCircleLeft} size="3x" />
                </Link>
                <div className="PrivacyPolicy-content">
                    <h2>Polityka Prywatności</h2>
                    <hr className="h-underline" />
                    <div className="PrivacyPolicy-content_text">
                        <h4>1. Przedmiot Polityki Prywatności.</h4>
                        <p>
                            Poniższa Polityka prywatności ma na celu poinformowanie Cię o sposobie wykorzystywania przez nas Twoich danych osobowych, względem których spełniamy wszystkie wymogi Ogólnego Rozporządzenia o Ochronie Danych (RODO). Chcę zapewnić Cię, że dokładamy wszelkich starań, aby Twoje dane były przetwarzane w przejrzysty i bezpieczny sposób.
                        </p>
                        <h4>2. Definicje.</h4>
                        <p>
                            Na potrzeby niniejszej Polityki posługujemy się poniższymi pojęciami.
                            <ol>
                                <li>
                                    <strong>Administrator (My)</strong> – podmiot przetwarzający Twoje dane osobowe, czyli Seahorse Consulting Joanna Kawalec, ul. Ks. Jadwigi Śl. 58-100 Świdnica, <strong>NIP 8862531596, REGON 021340389.</strong>
                                </li>
                                <li>
                                    <strong>Dane osobowe</strong> – wszystkie informacje o osobie fizycznej zidentyfikowanej lub możliwej do zidentyfikowania poprzez jeden bądź kilka szczególnych czynników określających fizyczną, fizjologiczną, genetyczną, psychiczną, ekonomiczną, kulturową lub społeczną tożsamość, w tym IP urządzenia, dane o lokalizacji, identyfikator internetowy oraz informacje gromadzone za pośrednictwem plików cookie oraz innej podobnej technologii.</li>
                                <li>
                                    <strong>Polityka</strong> – niniejsza Polityka prywatności.
                                </li>
                                <li>
                                    <strong>RODO</strong> – Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE.
                                </li>
                                <li>
                                    <strong>Serwis</strong> – serwis internetowy prowadzony przez nas pod adresem www.seahorse-consulting.pl wraz ze wszystkimi podstronami.
                                </li>
                                <li>
                                    <strong>Użytkownik, Klient (Ty)</strong> – każda osoba fizyczna odwiedzająca Serwis lub, w zależności od kontekstu i sytuacji, zamierzająca korzystać lub korzystająca z usług i funkcjonalności oferowanych w Serwisie.
                                </li>
                            </ol>
                        </p>
                        <h4>3. Zakres przetwarzania Twoich danych osobowych.</h4>
                        <p>Zbieramy i przetwarzamy Twoje dane osobowe jedynie w niezbędnym zakresie gwarantującym prezentowaną funkcjonalność Serwisu, na przykład, kiedy korzystasz z naszych formularzy kontaktowych, aby zadać nam pytanie, poprosić o ofertę czy nawiązać kontakt.</p>
                        <p>Bezpieczeństwo Twoich danych osobowych jest dla nas niezmiernie ważne. Dlatego podejmujemy środki techniczne i organizacyjne dla zapewnienia ochrony przechowywanych przez nas Twoich danych, w celu skutecznego zapobiegania ich utracie i niewłaściwemu wykorzystaniu przez osoby trzecie. Nasi pracownicy zajmujący się przetwarzaniem danych osobowych związani są w szczególności zobowiązaniem zachowania danych w poufności.</p>
                        <p>Twoje dane osobowe są chronione poprzez zapewnienie przesyłania ich w formie zaszyfrowanej; na przykład przy komunikacji z Twoją przeglądarką internetową posługujemy się SSL (Secure Sockets Layer). Na Twojej przeglądarce wyświetli się symbol przedstawiający kłódkę, abyś widział(a), kiedy ustanowione zostało połączenie SSL. W celu zapewnienia ochrony Twoich danych przez cały czas, środki bezpieczeństwa technicznego podlegają regularnym przeglądom i w miarę potrzeb są dostosowywane do nowych standardów technologicznych. Zasady te odnoszą się również do firm, którym zlecamy przetwarzanie i wykorzystanie danych zgodnie z naszymi instrukcjami.</p>
                        <p>Pragniemy zaznaczyć, że nie przekazujemy, nie sprzedajemy i nie użyczamy zgromadzonych danych osobowych innym osobom lub instytucjom, chyba że dzieje się to za Twoja wyraźną zgodą lub na Twoje życzenie, zgodnie z obowiązującymi przepisami prawa lub też na wniosek sądu, prokuratury, policji lub innego uprawnionego organu, w przypadku naruszenia przez innych Użytkowników przepisów prawa.</p>
                        <h4>4. Cele przetwarzania danych osobowych.</h4>
                        <p>Zbieramy, przetwarzamy i wykorzystujemy Twoje dane osobowe w następujących celach:
                            <ol>
                                <li>Zawarcia i wykonania umowy w zakresie świadczonych przez nas usług.</li>
                                <li>Udzielenia odpowiedzi na przedstawione pytanie, zaprezentowanie oferty.</li>
                                <li>Obsługi potencjalnego klienta przed zawarciem umowy, w procesie zawierania umowy oraz po zawarciu umowy – w formie telefonicznej oraz elektronicznej.</li>
                                <li>Promowania naszej marki poprzez korzystanie z mediów społecznościowych.</li>
                            </ol>
                        </p>
                        <h4>5. Podstawy prawne przetwarzania danych.</h4>
                        <p>Twoje dane osobowe mogą być przetwarzane w oparciu o następujące zasady wynikające z prawa:
                            <ol>
                                <li>
                                    1. Art. 6 ust. 1 lit. a) RODO stanowi podstawę prawną do czynności związanych z przetwarzaniem, na które uzyskujemy Twoją zgodę w danym celu związanym z przetwarzaniem.
                                </li>
                                <li>
                                    2. Art. 6 ust. 1 lit. b) RODO mówi o tym, że dane osobowe mogą być przetwarzane w celu wykonania umowy. To samo odnosi się do wszelkich działań związanych z przetwarzaniem, niezbędnych do przeprowadzenia czynności przed zawarciem umowy, takich jak obsługa zapytań dotyczących naszych usług.
                                </li>
                                <li>
                                    3. Art. 6 ust. 1 lit. f) RODO ma zastosowanie w odniesieniu do naszych uzasadnionych interesów, w szczególności promowania naszej marki w mediach społecznościowych. Nasz interes polega na zapewnieniu rzetelnej i powszechnej informacji o naszej działalności, zakresie i jakości usług.
                                </li>
                            </ol>
                        </p>
                        <h4>6. Prawo podania danych.</h4>
                        <p>Podanie przez Ciebie danych osobowych w przypadku woli zawarcia umowy jest wymogiem umownym – dane są nam niezbędne do zawarcia umowy i należytego jej wykonania. Niepodanie danych uniemożliwi nam zawarcie umowy, a nawet jej wykonanie.</p>
                        <p>W pozostałym zakresie podanie danych jest w pełni dobrowolne, lecz niezbędne do udzielenia odpowiedzi na Twoje pytanie.</p>
                        <h4>7. Kategorie przetwarzanych w Serwisie danych.</h4>
                        <p>
                            <ol>
                                <li>
                                    <strong>Korzystanie z formularzy kontaktowych.</strong> Uzyskiwanie informacji o naszych usługach przed zawarciem umowy, w związku z jej zawarciem oraz po jej zawarciu możliwe jest za pośrednictwem dostępnych w Serwisie formularzy kontaktowych lub drogą elektroniczną na podany adres e-mail czy też drogą kontaktu telefonicznego za pośrednictwem podanego numeru telefonu. Korzystanie z ww. funkcjonalności wymaga podania imienia i nazwiska, adresu e-mail, treści wiadomości, a niekiedy nazwy firmy.
                                </li>
                                <li>
                                    <strong>Media społecznościowe.</strong> Prowadzimy profile firmowe w mediach społecznościowych (Facebook, Instagram). Dane są przetwarzane wyłącznie w związku z prowadzeniem profilu, w tym w celu informowania o naszej aktywności oraz promowaniu różnego rodzaju wydarzeń, usług oraz produktów, a także w celu komunikacji z użytkownikami za pośrednictwem funkcjonalności dostępnych w mediach społecznościowych. Naszym celem jest promowanie własnej marki oraz budowaniu i utrzymaniu społeczności związanej z marką.
                                </li>
                            </ol>
                        </p>
                        <h4>8. Pliki cookie oraz podobne technologie.</h4>
                        <p>Nasz Serwis nie korzysta z plików cookie ani innych podobnych technologii.</p>
                        <h4>9. Okres przetwarzania danych.</h4>
                        <p>Okres przetwarzania Twoich danych osobowych zależy od rodzaju świadczonej usługi i celu przetwarzania. Co do zasady Twoje dane przetwarzane są przez czas świadczenia usługi lub realizowania zamówienia, do czasu wycofania wyrażonej zgody lub zgłoszenia skutecznego sprzeciwu względem przetwarzania danych w przypadkach, gdy podstawą prawną przetwarzania danych jest nasz uzasadniony interes.</p>
                        <p>Okres przetwarzania danych może być przedłużony w przypadku, gdy przetwarzanie jest niezbędne do ustalenia i dochodzenia ewentualnych roszczeń lub obrony przed nimi, a po tym czasie jedynie w przypadku i w zakresie, w jakim będą wymagać tego przepisy prawa. Po upływie okresu przetwarzania dane są nieodwracalnie usuwane lub anonimizowane.
                        </p>
                        <p>Gdy tylko cel przestaje mieć zastosowanie lub zostanie zrealizowany, Twoje dane osobowe zostaną usunięte lub ich przetwarzanie zostanie ograniczone. W przypadku ograniczenia przetwarzania danych, dane takie zostaną usunięte, gdy tylko okresy zachowania danych nałożone przez przepisy prawa, umowę/statut spółki lub postanowienia umowy przestaną uniemożliwiać dokonanie takiego usunięcia, o ile nie istnieje powód do założenia, iż takie usunięcie zagroziłoby uzasadnionym interesom oraz pod warunkiem, że takie usunięcie nie wymagałoby nieproporcjonalnie wielkiego wysiłku ze względu na szczególny charakter przechowywania.</p>
                        <h4>10. Twoje prawa związane z ochroną danych osobowych.</h4>
                        <p>W związku ze zbieraniem Twoich danych osobowych przysługuje Ci szereg uprawnień wynikających z RODO. Jeżeli chcesz skorzystać z któregokolwiek z tych praw nieodpłatnie, wystarczy przesłać nam wiadomość. Możesz skorzystać z następujących danych kontaktowych, nie ponosząc żadnych kosztów poza tymi, które naliczy Twój dostawca usług telekomunikacyjnych za przekazanie wiadomości:
                            <ul>
                                <li>
                                    e-mail: <strong>joanna.seahorse@gmail.com</strong>
                                </li>
                                <li>
                                    pocztą tradycyjną: Seahorse Consulting Joanna Kawalec, ul. Ks. Jadwigi Śl. 58-100 Świdnica
                                </li>
                                <li>
                                    Dla Twojego bezpieczeństwa zastrzegamy sobie prawo do uzyskania dalszych informacji przy udzielaniu odpowiedzi na istniejące zapytanie, w celu potwierdzenia Twojej tożsamości. Jeżeli identyfikacja okaże się niemożliwa, zastrzegamy sobie również prawo do odmowy reakcji na Twoje zapytanie.
                                </li>
                            </ul>
                            Dla pełnej realizacji Twoich praw zastrzegamy sobie również prawo do doprecyzowania Twojego żądania, w szczególności gdy nie będzie ono dla nas wystarczająco jasne.
                        </p>
                        <h4>11. Prawo dostępu do danych.</h4>
                        <p>Masz prawo domagać się od nas informacji odnośnie przechowywanych przez nas danych osobowych na Twój temat. Składając wniosek w zakresie dostępu do swoich danych, otrzymasz informacje o przetwarzaniu danych osobowych, w tym przede wszystkim o celach i podstawach prawnych przetwarzania, zakresie posiadanych danych, podmiotach, którym dane osobowe są ujawniane i planowanym terminie ich usunięcia.</p>
                        <h4>12. Prawo do sprostowania.</h4>
                        <p>Masz prawo domagać się niezwłocznego sprostowania i/lub uzupełnienia danych osobowych przechowywanych na Twój temat. Naszym obowiązkiem jest dbanie o to, aby nasza wzajemna komunikacja była oparta o dane prawdziwe, kompletne i aktualne.</p>
                        <h4>13. Prawo do ograniczenia przetwarzania.</h4>
                        <p>Masz prawo domagać się, aby przetwarzanie Twoich danych osobowych zostało ograniczone, jeżeli kwestionujesz dokładność danych przechowywanych na Twój temat, jeżeli przetwarzanie odbywa się w sposób bezprawny, a nam nie są już te dane potrzebne, ale Ty nie życzysz sobie, aby dane te zostały usunięte, a wymagasz ich w celu zgłoszenia, wykonania lub obrony uprawnień wynikających z przepisów prawa, lub jeżeli przedstawiłeś/łaś swój sprzeciw wobec ich przetwarzania.</p>
                        <h4>14. Prawo do usunięcia.</h4>
                        <p>Masz prawo domagać się usunięcia Twoich danych osobowych przechowywanych przez nas, o ile utrzymywanie danych nie jest niezbędne dla zapewnienia wolności słowa, wolności dostępu do informacji, spełnienia zobowiązania wynikającego z przepisów prawa, z powodu interesu publicznego, w celu zgłoszenia lub obrony przed roszczeniami lub w celu dochodzenia praw na mocy przepisów.</p>
                        <h4>15. Prawo do informacji.</h4>
                        <p>Jeżeli zgłosiłeś/łaś prawo do sprostowania, do usunięcia lub ograniczenia przetwarzania danych, powiadomimy wszystkich odbiorców Twoich danych osobowych o sposobie sprostowania, usunięcia lub nałożenia ograniczeń w przetwarzaniu tych danych, chyba że jest to niemożliwe do przeprowadzenia lub wiąże się z nieproporcjonalnym wysiłkiem.</p>
                        <h4>16. Prawo do przenoszenia danych.</h4>
                        <p>Masz prawo do uzyskania kopii przekazanych nam danych, które zostaną przesłane Tobie lub osobie trzeciej w ustrukturyzowanym, standardowym formacie, czytelnym dla czytników maszynowych. Jeżeli domagasz się przesłania tych danych do innego administratora danych, zostanie to zrealizowane, o ile istnieje taka możliwość techniczna.
                        </p>
                        <h4>17. Prawo do sprzeciwu.</h4>
                        <p>Jeżeli Twoje dane osobowe są przetwarzane na podstawie uzasadnionego interesu art. 6 ust. 1 lit. f) RODO, to masz prawo do sprzeciwu w dowolnym czasie wobec przetwarzania, zgodnie z art. 21 RODO.</p>
                        <h4>18. Prawo do wycofania zgody.</h4>
                        <p>Jeśli Twoje dane są przetwarzane na podstawie zgody, masz prawo ją wycofać w dowolnym momencie, ze skutkiem przyszłym. Pozostanie to bez wpływu na zebrane dotychczas dane. Mamy nadzieję, że rozumiesz, iż z przyczyn technicznych, przetworzenie Twojego wycofania zgody może wymagać pewnej ilości czasu, oraz że możesz nadal przez taki okres otrzymywać od nas wiadomości.</p>
                        <h4>19. Prawo do złożenia skargi do organu nadzorczego.</h4>
                        <p>Jeżeli przetwarzanie Twoich danych osobowych narusza przepisy o ochronie danych lub jeżeli Twoje prawa do ochrona danych zostały naruszone w jakikolwiek inny sposób, możesz złożyć skargę do organu nadzorczego. Organem nadzorczym właściwym na terytorium Polski jest Prezes Urzędu Ochrony Danych Osobowych w Warszawie.</p>
                        <h4>20. Rozpatrzenie wniosku.</h4>
                        <p>Jeśli skierujesz do nas wniosek o realizację danego uprawnienia, to odpowiedź na zgłoszenie zostanie udzielona w ciągu miesiąca od jego otrzymania. W razie konieczności przedłużenia tego terminu, poinformujemy Cię o przyczynach takiego przedłużenia.</p>
                        <p>Odpowiedź na Twój wniosek będzie udzielana na adres e-mail, z którego prześlesz wniosek, a w przypadku wniosków skierowanych listownie, listem zwykłym na adres przez Ciebie wskazany, o ile z treści listu nie będzie wynikała chęć otrzymania informacji zwrotnej na adres e-mail (w takim przypadku należy podać adres e-mail).</p>
                        <h4>21. Przekazywanie danych osobowych osobom trzecim.</h4>
                        <p>Przy przekazywaniu Twoich danych osobowych, zapewniamy, aby poziom bezpieczeństwa był zawsze możliwie najwyższy, dlatego też Twoje dane przekazywane są jedynie starannie dobranym wcześniej i związanym zobowiązaniami wynikającymi z umów firmom partnerskim.</p>
                        <p>W związku z oferowanymi w naszym Serwisie usługami oraz produktami, Twoje dane mogą być powierzone lub udostępnione podmiotom wspomagającym naszą działalność, bez których nie bylibyśmy w stanie wypełnić naszych zobowiązań.</p>
                        <p>Twoje dane osobowe mogą przetwarzać na nasze zlecenie takie podmioty jak podwykonawcy IT zajmujący się usługami hostingu danych, dostawcy usług poczty elektronicznej, firma zarządzająca w naszym imieniu firmowymi profilami w mediach społecznościowych.</p>
                        <p>Wreszcie, możemy przekazywać Twoje dane osobom trzecim lub organom administracji publicznej zgodnie z aktualnymi przepisami o ochronie danych, jeżeli wymaga tego od nas prawo (np. na podstawie zarządzenia wydanego przez organ administracji publicznej lub sąd).</p>
                        <h4>22. Przekazywanie danych poza obszar EOG.</h4>
                        <p>Twoje dane pozyskiwane za pośrednictwem Serwisu są przetwarzane na terenie Europejskiego Obszaru Gospodarczego.
                        </p>
                        <h4>23. Zmiany Polityki Prywatności.</h4>
                        <p>W celu zapewnienia, iż nasza Polityka Prywatności spełnia przez cały czas aktualne wymogi wynikające z przepisów, zastrzegamy sobie prawo do wnoszenia do niej zmian w dowolnym czasie.</p>
                        <p>Wersja: wrzesień 2022r.</p>
                        <div className="text-right w-100">
                            <FontAwesomeIcon className="PrivacyPolicy-icon" onClick={scrollTop} icon={faArrowCircleUp} size="3x" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy