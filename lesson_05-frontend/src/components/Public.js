import { Link } from "react-router-dom";

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Akyol K. Repairs!</span></h1>
            </header>
            <main className="public_main">
                <p>Located in Beautiful Downtown Berlin City, Akyol K. Repairs provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public_addr">
                    Akyol K. Repairs<br />
                    Staakener str. 16<br />
                    13581 Berlin DE<br />
                    <a href="tel:+4930123456789">(012) 345-6789</a>
                </address>
                <br />
                <p>Owner: Kazim Akyol</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>
    )
    return content
}

export default Public