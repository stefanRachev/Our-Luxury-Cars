import page from "../node_modules/page/page.mjs";
import { navigation,renderContent } from "./middleware/render.js";
import { loginPage } from "./views/loginPage.js";
import { registerPage } from "./views/registerPage.js";
import { searchPage } from "./views/searchPage.js";


page(navigation);
page(renderContent);

page("/register", registerPage);
page("/login", loginPage);
page("/search", searchPage);

page.start();
