import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './styles.scss';

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
        if (scrollY >= 50 && !position) {
            this.setState({ position: true })

        } else if (scrollY < 50 && position) {
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
            { name: "about", label: "O NAS", to: "about" },
            { name: "opinions", label: "OPINIE", to: "opinions" },
            { name: "contact", label: "KONTAKT", to: "contact" }
        ]
        return (
            <div className="Header" id="home">
                <div className={`Header-navbar ${this.state.position && "white"} ${!this.state.position && this.state.navOpen && "dark"}`}>
                    <div className="Header-navbar__logo">
                        <a href="#home">
                            {/* <img src={!this.state.position ? bialeLogo : czarneLogo} className={this.state.position && "dark"} alt="Seahorse logo małe" /> */}
                            małe logo
                        </a>
                    </div>
                    <div className="Header-navbar__navigation">
                        <nav className={`navbar navbar-expand-md ${this.state.position && "white"}`}>
                            <button className="navbar-toggler p-1" type="button" onClick={this.toggleBurger} data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className={`navbar-toggler-icon ${this.state.position ? "dark-icon" : "light-icon"} ${!this.state.position && this.state.navOpen && "blue-icon"}`}></span>
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
                    <div className="Header-mainLogo_text">
                        <h2>Seahorse</h2>
                        <h4>CONSULTING</h4> {/* czcionka - Poppins, Arimo, */}
                    </div>
                </div>
            </div>
        )
    }
};

export default Header;

