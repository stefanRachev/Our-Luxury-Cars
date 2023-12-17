import page from "../node_modules/page/page.mjs";
import { navigation, renderContent } from "./middleware/render.js";
import { userSession } from "./middleware/userSession.js";
import { catalogPage } from "./views/catalogPage.js";
import { createPage } from "./views/createPage.js";
import { detailsPage } from "./views/detailsPage.js";
import { editPage } from "./views/editPage.js";
import { homePage } from "./views/homePage.js";
import { loginPage } from "./views/loginPage.js";
import { logout } from "./views/logout.js";
import { registerPage } from "./views/registerPage.js";
import { searchPage } from "./views/searchPage.js";

page(userSession);
page(navigation);
page(renderContent);

page("/", homePage);
page("/register", registerPage);
page("/login", loginPage);
page("/logout", logout);
page("/cars",catalogPage);
page("/user/profile",createPage)
page("/search", searchPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);


page.start();
