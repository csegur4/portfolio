import './Profile.css'
import { Link } from 'react-scroll';

function Header(props) {
    return(
        
            <header className={`header ${props.animation}`}>
                    <div className="top-menu">
                        <ul>
                            <li>
                                <Link to="about-card" spy={true} smooth={true} offset={-80} duration={1000}>
                                    <span className="icon ion-person"></span>
                                    <span className="link">About</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="works-card" spy={true} smooth={true} offset={-80} duration={1000}>
                                    <span className="icon ion-paintbrush"></span>
                                    <span className="link">Projects</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="contacts-card" spy={true} smooth={true} offset={100} duration={1000}>
                                    <span className="icon ion-at"></span>
                                    <span className="link">Contact</span>
                                </Link>
                            </li>
                            <li>
                                <a href="https://www.facebook.com" target='_blank' rel='noreferrer'>
                                    <span className="icon ion-social-facebook"></span>
                                    <span className="link">FB</span>
                                </a>
                            </li>
                            
                            <li>
                                <a href="https://www.instagram.com" target='_blank' rel='noreferrer'>
                                    <span className="icon ion-social-instagram"></span>
                                    <span className="link">IG</span>
                                </a>
                            </li>
                            
                        </ul>
                    </div>

            </header>
        
    )
}

export default Header;