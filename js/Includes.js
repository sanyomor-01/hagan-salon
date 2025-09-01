class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<header id="header">
            <nav>
                <div class="logo">
                <img src="./images/default-monochrome-black 1.svg" alt="hair" />
                </div>
                <ul>
                <li><a class="link active" href="index.html">Home</a></li>
                <li><a class="link" href="about.html">Our Story</a></li>
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


class Booking extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
              <section id="four">
      <div class="container text-center">
        <span class="section-tag booking-tag text-center">Booking</span>
        <div class="row column text-left gap-md justify-center">
          <div>
            <header class="major">
              <h2 class="white">Book Us Now</h2>
            </header>
            <p class="location-name mb-md semi-bold p-1 text-center">
              Hill Top - Kumasi
            </p>
            <p class="line-height">
              We work by <span class="fw-light">appointment</span> only to give
              each client the time and attention they deserve. <br />
              No <span class="line-through">walk-ins</span> walk-ins — please
              schedule in advance to secure your spot.
            </p>
          </div>

          <div>
            <ul class="flex-column">
              <li class="contact a-btn text-center">
                <a class="cta-2" href="">+1 903 033 2343</a>
              </li>
              <li class="contact-us a-btn text-center">
                <a class="cta-2 white" href="">CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
        
        `
    }
}

customElements.define('special-booking', Booking)
customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)