import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './styles.scss';
import logoWhite from './logoWhite.png';
import logoTeal from './logoTeal.png';
import URLS from '../../utils/urls';

class Header extends Component {
    state = {
        position: false,
        navOpen: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    }

    handleScroll = () => {
        const { position } = this.state
        const scrollY = window.scrollY
        if (scrollY >= 40 && !position) {
            this.setState({ position: true })

        } else if (scrollY < 40 && position) {
            this.setState({ position: false })
        }
    };

    toggleBurger = () => {
        const { navOpen } = this.state
        this.setState({ navOpen: !navOpen })
    };

    render() {

        const tabs = [
            { name: "home", label: "HOME", to: "home" },
            { name: "company", label: "FIRMA", to: "company" },
            { name: "about", label: "O MNIE", to: "about" },
            { name: "blog", label: "BLOG", to: "blog" },
            { name: "references", label: "OPINIE", to: "references" },
            { name: "contact", label: "KONTAKT", to: "contact" }
        ]

        return (
            <div className="Header" id="home">
                <div className={`Header-navbar ${this.state.position && "white"} ${!this.state.position && this.state.navOpen && "dark"}`}>
                    <div className="Header-navbar__logo">
                        <RouterLink to={URLS.HOME}>
                            <img src={!this.state.position ? logoWhite : logoTeal} className={`${this.state.position && "dark"} ${this.state.navOpen && "nav-open"}`} alt="Seahorse logo małe" />
                        </RouterLink>
                    </div>
                    <div className="Header-navbar__navigation">
                        <nav className={`navbar navbar-expand-md ${this.state.position && "white"}`}>
                            <button className="navbar-toggler p-1" type="button" onClick={this.toggleBurger} data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className={`navbar-toggler-icon ${this.state.position ? "blue-icon" : "light-icon"} ${this.state.navOpen && "light-icon"}`}></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    {tabs.map(({ name, label, to }) => (
                                        <Link
                                            activeClass="active"
                                            key={name}
                                            to={to}
                                            spy={true}
                                            smooth={"easeInOutQuart"}
                                            duration={900}
                                            className={`nav-item nav-link ${this.state.position && "dark"}`}>
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {this.state.navOpen &&
                    <div className={`mobile ${this.state.position && "whiteBg"}`}>
                        {tabs.map(({ name, label, to }) => (
                            <Link
                                key={name}
                                to={to}
                                spy={true}
                                smooth={"easeInOutQuart"}
                                duration={1100}
                                onClick={this.toggleBurger}
                                className={`nav-item nav-link ${this.state.position && "dark"}`} >
                                {label}
                            </Link>
                        ))}
                    </div>
                }
                <div className="Header-mainLogo">
                    <RouterLink className="Header-mainLogo_link" to={URLS.HOME}>
                        <img src={logoWhite} alt="Seahorse logo" />
                    </RouterLink>
                    <div className="Header-mainLogo_text">
                        <h1>Seahorse</h1>
                        <h2>CONSULTING</h2>
                    </div>
                </div>
            </div>
        )
    }
};

export default Header;

