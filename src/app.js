import page from "../node_modules/page/page.mjs";
import { navigation, renderContent } from "./middleware/render.js";
import { userSession } from "./middleware/userSession.js";
import { homePage } from "./views/homePage.js";
import { loginPage } from "./views/loginPage.js";
import { registerPage } from "./views/registerPage.js";
import { searchPage } from "./views/searchPage.js";


page(userSession);
page(navigation);
page(renderContent);

page("/", homePage);
page("/register", registerPage);
page("/login", loginPage);
page("/search", searchPage);

page.start();
