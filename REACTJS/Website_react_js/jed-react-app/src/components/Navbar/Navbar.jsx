import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-logo">Web3GlobalConference</div>
            <ul className="nav-menu">
                <li className="nav-speaker">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeOCFyt6izfrUbp0JCyvoP9TGRKAnK5LERjmbD35WMsTIl-Jg/viewform">
                        BE A SPEAKER
                    </a>
                </li>
                <li>
                    <a href="#agenda">Agenda</a>
                </li>
                <li>
                    <a href="#speakers">Speakers</a>
                </li>
                <li className="nav-contact">
                    <a href="https://app.moongate.id/e/web3-global-conference-2024">
                        BOOK A TICKET
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
