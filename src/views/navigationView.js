import { html } from "../../node_modules/lit-html/lit-html.js";

const navigationTemplate = () => html`
  <a id="logo" href="/"
    ><img id="logo-car" src="/images/car-logo.png" alt="img"
  /></a>
  <nav>
    <div>
      <a href="/cars">Our Cars</a>
      <a href="/search">Search</a>
    </div>

    <!-- Logged-in users -->
    <div class="user">
      <a href="/user/profile">Add Your Car</a>
      <a href="/logout">Logout</a>
    </div>

    <!-- Guest users -->
    <div class="guest">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>
  </nav>
`;

export const navigationView = (ctx) => {
  return navigationTemplate();
};
