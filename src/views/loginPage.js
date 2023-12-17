import { html } from "../../node_modules/lit-html/lit-html.js";
import { setUserData } from "../utils.js";

const loginTemplate = (onSubmit) => html`
  <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form @submit="${onSubmit}" class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>
`;

export const loginPage = (ctx) => {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    if (Object.values(formData).some((el) => el === "")) {
      alert("All fields are required!");
    }

    const url = `http://localhost:3030/users/login`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const responseData = await response.json();
        setUserData(responseData);
        e.target.reset();
        ctx.page.redirect("/");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (err) {
      console.err("Error during registration:", err.message);
    }
  }
};
