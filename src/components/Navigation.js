function Navigation({ currentPage, setPageHandler }) {

    console.log(setPageHandler)

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a 
                        href="#about" 
                        onClick={() => setPageHandler('About')} 
                        className={currentPage === 'About'}>About</a>
                    </li>
                    <li>
                        <a 
                        href="#portfolio" 
                        onClick={() => setPageHandler('Portfolio')} 
                        className={currentPage === 'Portfolio'}>Portfolio</a>
                    </li>
                    <li>
                        <a 
                        href="#contact" 
                        onClick={() => setPageHandler('Contact')} 
                        className={currentPage === 'Contact'}>Contact</a>
                    </li>
                    <li>
                        <a 
                        href="#resume" 
                        onClick={() => setPageHandler('Resume')} 
                        className={currentPage === 'Resume'}>Resume</a>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Navigation;