import { html } from "../../node_modules/lit-html/lit-html.js";
import { setUserData } from "../utils.js";

const registerTemplate = (onSubmit) => html`
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form @submit="${onSubmit}" class="register-form">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>
`;

export const registerPage = (ctx) => {
  ctx.render(registerTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    const rePassword = formData.get("re-password")
    
    if(email === "" || password === "" || rePassword === ""){
      return alert("All fields are required!")
    }else if(password !== rePassword){
      return alert("Password don\'t match!")
    }

    const url = `http://localhost:3030/users/register`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const responseData = await response.json();
        setUserData(responseData);
        e.target.reset();
        ctx.page.redirect("/");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  }

  
};
