import { NavLink } from "react-router-dom"

const Navbar = ({ containerStyles, onClick }) => {

    const navLinks = [
        {title: "Home", path: "/"},
        {title: "Collection", path: "/collection"},
        {title: "Blog", path: "/blog"},
        {title: "Contact", path: "mailto:info@shopanza.com"},
    ]

    return (
        <nav className={containerStyles}>
            {navLinks.map((link, index) => (
                <NavLink key={index} to={link.path} className={({ isActive }) => `px-3 py-2 rounded-full ${isActive ? "active-link" : ""}`} onClick={onClick}>
                    {link.title}
                </NavLink>
            ))}
        </nav>
    )
}

export default Navbar
