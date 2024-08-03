export default function Home() {
    return `
      <section class="rhyno">
        <h1>Welcome to Rhyno</h1>
        <p>Your trusted partner in prebooking and rentals</p>
        <button id="learnMoreBtn">Learn More</button>
      </section>
      <section class="services">
        <h2>Our Services</h2>
        <div class="service">
          <h3>Prebook</h3>
          <p>Secure EV of your choice ahead of time with our easy prebooking service.</p>
        </div>
        <div class="service">
          <h3>Rentals</h3>
          <p>Find the perfect rental vehicle for your needs at the best rates.</p>
        </div>
      </section>
      <section id="vehicles">
        <h2>Our Vehicles</h2>
        <div class="vehicle-gallery">
          <div class="vehicle">
            <img src="src/assets/rhyno.png" alt="SE03 Lite">
            <h3>SE03 Lite</h3>
            <button class="flex btn center" id="btn-se03-lite">Check it out</button>
          </div>
          <div class="vehicle">
            <img src="src/assets/rhyno.png" alt="SE03">
            <h3>SE03</h3>
            <button class="flex btn center" id="btn-se03">Check it out</button>
          </div>
          <div class="vehicle">
            <img src="src/assets/rhyno.png" alt="SE03 Max">
            <h3>SE03 Max</h3>
            <button class="flex btn center" id="btn-se03-max">Check it out</button>
          </div>
        </div>
      </section>
      <section id="usp-carousel">
        <h2>Our Unique Selling Proposition (USP)</h2>
        <div class="carousel">
          <div class="carousel-item active">LFP Battery</div>
          <div class="carousel-item">Wider Tyres</div>
          <div class="carousel-item">Range Prediction</div>
          <div class="carousel-item">Extraordinary Experience</div>
          <div class="carousel-item">Rugged and simple design</div>
        </div>
      </section>
      <div class="floating-button">
        <button class="flex btn center" id="btn-prebook-now">Prebook Now</button>
      </div>
    `;
  }
  