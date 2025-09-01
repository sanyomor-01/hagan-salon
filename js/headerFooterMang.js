class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<header id="header">
            <nav>
                <div class="logo">
                <img src="./images/default-monochrome-black 1.svg" alt="logo" />
                </div>
                <ul>
                <li><a class="link active" href="index.html">Home</a></li>
                <li><a class="link" href="index.html">Our Story</a></li>
                <li><a class="link" href="index.html">Contact</a></li>
                </ul>
            </nav>
    </header>
`
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="footer white">
            <section class="container">
                <div class="row justify-center">
                <div>
                    <ul class="socials justify-center">
                    <li>
                        <a target="_blank" href="#"
                        ><img src="./images/shapes/be.svg" alt="Behance"
                        /></a>
                    </li>
                    <li>
                        <a target="_blank" href="#"
                        ><img src="./images/shapes/new-twitter.svg" alt="X corp"
                        /></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/sanyomor-01 "
                        ><img src="./images/shapes/github-01.svg" alt="GitHub"
                        /></a>
                    </li>
                    </ul>
                    <div class="mt-5">
                    <ul class="author justify-center">
                        <li>
                        <a href="https://github.com/sanyomor-01/">&commat;Michael</a>
                        </li>
                        <span class="white-line"></span>
                        <li class="special white">
                        DESIGN :<a
                            target="_blank"
                            href="https://www.behance.net/michaelsanyomor"
                            >Michael</a
                        >
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
    </footer>
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)