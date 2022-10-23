import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './styles.scss';
import logoWhite from '../Header/logoWhite.png';
import URLS from '../../utils/urls';
import fbIcon from './fb.png'
import igIcon from './ig.png'

const Footer = () => {

    const tabs = [
        { name: "home", label: "HOME", to: "home" },
        { name: "company", label: "FIRMA", to: "company" },
        { name: "about", label: "O MNIE", to: "about" },
        { name: "blog", label: "BLOG", to: "blog" },
        { name: "references", label: "OPINIE", to: "references" },
        { name: "contact", label: "KONTAKT", to: "contact" }
    ]

    const icons = [
        { src: fbIcon, alt: "Facebook" },
        { src: igIcon, alt: "Instagram" }
    ]

    return (
        <div className="Footer">
            <div className="Footer-container">
                <a className="Footer-container_logo" href=" ">
                    <img src={logoWhite} alt="Stopka białe logo" />
                    <div className="text">
                        <h3>Seahorse</h3>
                        <h4>CONSULTING</h4>
                    </div>
                </a>
                <div className="Footer-container_nav navbar-nav">
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
                    <RouterLink
                        activeClass="active"
                        key="privacy"
                        to={URLS.PRIVACY}
                        className={`nav-item nav-link`}>
                        POLITYKA PRYWATNOŚCI
                    </RouterLink>
                </div>
                <div className="Footer-container_icons">
                    {icons.map(({ src, alt }) => (
                        <div key={alt} className="Footer-container_icons__wrapper">
                            <img src={src} alt={alt} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="Footer-copyrights">
                <p>Copyright © 2022 Seahorse Consulting. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer