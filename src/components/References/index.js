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
        autoplaySpeed: 7000,
        cssEase: "linear"
    }

    const references = [
        {name: "Beata Kozidrak", company: "Bajm", text: "Łasica jest super! Świetnie się z nią pracuje, easy-going i w ogóle. Bierzcie ją wszyscy do współpracy, polecam! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name: "Freddie Mercury", company: "Queen", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
        {name: "Rysiek Riedel", company: "Dżem", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}
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
