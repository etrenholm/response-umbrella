import Navigation from "../Navigation";

function Header({ currentPage, setCurrentPage }) {

    return (
        <header>
            <h1>
                <a 
                    href="#portfolio"
                    onClick={() => setCurrentPage('Portfolio')}>
                    Hi, I'm Erica.
                </a>
            </h1>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </header>
    )
}

export default Header;