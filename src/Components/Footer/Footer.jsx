import "./Footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <hr />
            <div className="social-icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook"></i>
                </a>
            </div>
            <p>copyright { currentYear } Jampier Caramantin</p>
        </footer>
    )
}

export default Footer