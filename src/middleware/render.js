import { render,html } from "../../node_modules/lit-html/lit-html.js";


const headerNavigation = document.querySelector(".header-navigation");

const mainElement = document.getElementById("main-element");

const renderModel = (template) => {
  render(template, mainElement);
};

const navigationTemplate = (user) => html`
  <a id="logo" href="/"
    ><img id="logo-car" src="/images/car-logo.png" alt="img"
  /></a>
  <nav>
    <div>
      <a href="/cars">Our Cars</a>
      <a href="/search">Search</a>
    </div>
    ${user
      ? html` <div class="user">
          <a href="/user/profile">Add Your Car</a>
          <a href="/logout">Logout</a>
        </div>`
      : html`
    <div class="guest">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>
  </nav>`}
  </nav>
`;

export const navigation = (ctx, next) => {
  render(navigationTemplate(ctx.user),headerNavigation);
  next();
};

export function renderContent(ctx, next) {
  ctx.render = renderModel;
  next();
}
