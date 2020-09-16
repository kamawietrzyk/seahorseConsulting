import React from 'react';
import { Link } from 'react-scroll';
import './styles.scss';
import logoWhite from '../Header/logoWhite.png';

const Footer = () => {

    const tabs = [
        { name: "home", label: "HOME", to: "home" },
        { name: "company", label: "FIRMA", to: "company" },
        { name: "about", label: "O MNIE", to: "about" },
        { name: "references", label: "OPINIE", to: "references" },
        { name: "contact", label: "KONTAKT", to: "contact" }
    ]

    return (
        <div className="Footer">
            <a className="Footer-logo" href=" ">
                <img src={logoWhite} alt="Stopka białe logo" />
                <div className="text">
                    <h3>Seahorse</h3>
                    <h4>CONSULTING</h4>
                </div>
            </a>
            <div className="Footer-nav navbar-nav">
                {tabs.map(({ name, label, to }) => (
                    <Link
                        activeClass="active"
                        key={name}
                        to={to}
                        spy={true}
                        smooth={"easeInOutQuart"}
                        duration={900}
                        className={`nav-item nav-link`}>
                        {label}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Footer