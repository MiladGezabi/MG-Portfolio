import '../components-style/Header.css'

function Header () {

    return (
        <section className="header">
            <div className="name-box">
                <a href="">
                    <h1>
                        Milad Gezabi
                    </h1>
                </a>
            </div>

            <nav>
                <ul>
                    <li>
                        <a href=""> Home </a>
                    </li>
                    <li>
                        <a href=""> About </a>
                    </li>
                    <li>
                        <a href=""> Projects </a>
                    </li>
                    <li>
                        <a href=""> Contact </a>
                    </li>
                </ul>
            </nav>
        </section>
    )

    
}

export default Header