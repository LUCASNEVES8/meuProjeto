import "../Header/Header.css"

export function Header() {
    return(
        <header>
            <h1>Portfólio</h1>
            <nav>
                <ul>
                    {/* A tag <a> deve ficar dentro da <li> para melhor semântica */}
                    <li><a href="#sobreMim">Sobre mim</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}