function Navigation({ currentPage, setCurrentPage }) {


    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a 
                        href="#about" 
                        onClick={() => setCurrentPage('About')} 
                        className={currentPage === 'About' ? 'nav-active' : ''}
                        >About</a>
                    </li>
                    <li>
                        <a 
                        href="#portfolio" 
                        onClick={() => setCurrentPage('Portfolio')} 
                        className={currentPage === 'Portfolio' ? 'nav-active' : ''}
                        >Portfolio</a>
                    </li>
                    <li>
                        <a 
                        href="#contact" 
                        onClick={() => setCurrentPage('Contact')} 
                        className={currentPage === 'Contact' ? 'nav-active' : ''}
                        >Contact</a>
                    </li>
                    <li>
                        <a 
                        href="#resume" 
                        onClick={() => setCurrentPage('Resume')} 
                        className={currentPage === 'Resume' ? 'nav-active' : ''}
                        >Resume</a>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Navigation;