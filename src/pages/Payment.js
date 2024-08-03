document.addEventListener("DOMContentLoaded", () => {
    const paymentForm = document.getElementById("payment-form");
    
    if (paymentForm) {
      paymentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const formData = new FormData(paymentForm);
        const data = Object.fromEntries(formData.entries());
        
        console.log("Payment data:", data);
  
        // Here, integrate your payment gateway logic
        // For example, using Stripe:
        // stripe.createToken(cardElement).then((result) => {
        //   if (result.error) {
        //     console.error(result.error.message);
        //   } else {
        //     console.log(result.token);
        //     // Send the token to your server
        //   }
        // });
      });
    }
  });
  