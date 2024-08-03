import './index.css';

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the home page content
  loadPage("Home");

  // Add event listener for navigation links
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const pageName = event.target.getAttribute("href").split("/").pop().replace(".js", "");
      loadPage(pageName);
    });
  });
});

function loadPage(page) {
  import(`./pages/${page}.js`)
    .then(module => {
      document.getElementById("home-content").innerHTML = module.default();
    })
    .catch(err => console.error(`Failed to load page ${page}:`, err));
}

