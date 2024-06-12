// import NavDropdown from 'react-bootstrap/NavDropdown';

import {useState, useEffect} from 'react';
import {Navbar, Nav, Container } from "react-bootstrap";
import logo from "../Assets/img/logo.svg"; 
import navIcon1 from "../Assets/img/nav-icon1.svg";
import navIcon2 from "../Assets/img/nav-icon2.svg";
import navIcon3 from "../Assets/img/nav-icon3.svg";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home'); // Create state - starter = fuction which keep info active link or not - initiate at "Home" because that's where are the links
    const [scrolled, setScrolled] = useState(false); // Create state - keep info if user has scrolled - default parameters = false 

    useEffect(() => {  // determine if scrolled or not, trigger when scrolls starts
        const onScroll = () => {
            if (window.scrollY > 50 ) {   //if height has been scrolled more than 50px (around where is the banner)
                setScrolled(true);
            } else {                    // if 
                setScrolled(false);
            }
        }

        window.addEventListener ("scrolled", onScroll); // 

        return () => window.removeEventListener ("scroll", onScroll); //remove on the DOM for no cascade we want this only one time
    }, [])

    const onUpdateActiveLink = (value) => {    {/* déclare function taking in the value and setActiveLink with that value */}
        setActiveLink(value);
    }


    return (
        <Navbar expand="md" className={scrolled ? "scrolled" :""}> {/* classname based on condition state scrolled, if scrolled classname scrolled if not no classname*/}
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navber-toggler-icon"></span>
                </Navbar.Toggle>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink("home")}> Home </Nav.Link>  {/* if this is link == active link then classname = "active navbar-link" else, classname = "navbar-link" -- want sthe state updated when link pressed  */}
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#projects"className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"> <img src={navIcon1} alt= ""></img> </a>
                            <a href="#"> <img src={navIcon2} alt= ""></img> </a>
                            <a href="#"> <img src={navIcon3} alt= ""></img> </a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}> <span> Let's connect </span> </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
