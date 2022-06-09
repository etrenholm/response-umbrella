import Navigation from "./Navigation";

function Header({ currentPage, setCurrentPage }) {

    return (
        <header>
            <h1>
                <a href="/">
                    Hi, I'm Erica.
                </a>
            </h1>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </header>
    )
}

export default Header;