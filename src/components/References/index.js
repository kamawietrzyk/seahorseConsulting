import React from 'react';
import './styles.scss';
import Slider from 'react-slick';

const References = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 8000,
        cssEase: "linear"
    }

    const references = [
        {name: "Paulina Przybylska", company: " właścicielka Stajni Wierzbna – Biały Las", text: "Pełen profesjonalizm i zaangażowanie w działania podejmowane w ramach współpracy, która – co najważniejsze - zaczyna się od dokładnego poznania potrzeb klienta oraz branży, w jakiej działa."},
        {name: "Justyna Gnutek-Chudy", company: " właścicielka firmy Smart Work Sp. z o.o.", text: "Ogromna kreatywność w kształtowaniu wizerunku firmy – od stworzenia samej koncepcji, poprzez dopracowanie szczegółów każdego narzędzia, aż po działania promocyjne."},
        {name: "Mateusz Ziemak", company: " właściciel firmy Studio PH", text: "Tłumaczenia wykonane profesjonalnie i w ustalonym terminie. Dzięki bliskiej współpracy wiem, że teksty są dopracowane, z dbałością o najmniejszy szczegół – zwłaszcza w zakresie języka branżowego."}
    ]

    return (
    <div className="References" id="references">
        <div className="References-container">
                <Slider {...settings}>
                    {references.map(({ name, company, text }, index) => (
                        <div className="References-container_carousel" key={index}>
                            <div className="content">
                                <h4>"{text}"</h4>
                                <h5>{name} <br/> <span>~{company}</span></h5>
                            </div>
                        </div>
                    ))}
                </Slider>
        </div>
    </div>
    )
};

export default References
