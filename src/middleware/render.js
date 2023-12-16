import { render } from "../../node_modules/lit-html/lit-html.js";
import { navigationView } from "../views/navigationView.js";

const headerNavigation = document.querySelector(".header-navigation");

const mainElement = document.getElementById("main-element");

const renderModel = (template) => {
  render(template, mainElement);
};

export const navigation = (ctx, next) => {
  render(navigationView(ctx),headerNavigation);
  next();
};

export function renderContent(ctx, next) {
  ctx.render = renderModel;
  next();
}
