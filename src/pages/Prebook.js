import './Prebook.css'
export default function Prebook() {
  return `
    <section class="prebook">
      <h1>Prebook Your EV</h1>
      <p>Reserve your EV in advance with our simple prebooking process.</p>
      <form id="payment-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="card-number">Card Number</label>
          <input type="text" id="card-number" name="card-number" required>
        </div>
        <div class="form-group">
          <label for="expiry-date">Expiry Date</label>
          <input type="text" id="expiry-date" name="expiry-date" required>
        </div>
        <div class="form-group">
          <label for="cvc">CVC</label>
          <input type="text" id="cvc" name="cvc" required>
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </section>
  `;
}
