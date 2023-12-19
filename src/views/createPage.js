import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAccessToken } from "../utils.js";

const createTemplate = (onSubmit) => html`
  <section id="create">
    <div class="form form-auto">
      <h2>Share Your Car</h2>
      <form @submit="${onSubmit}" class="create-form">
        <input type="text" name="model" id="model" placeholder="Model" />
        <input
          type="text"
          name="imageUrl"
          id="car-image"
          placeholder="Your Car Image URL"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
        />
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="Weight in Kg"
        />
        <input
          type="text"
          name="speed"
          id="speed"
          placeholder="Top Speed in Kmh"
        />
        <textarea
          id="about"
          name="about"
          placeholder="More About The Car"
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`;

export const createPage = (ctx) => {
  const token = getAccessToken();

  ctx.render(createTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).some((el) => el === "")) {
      return alert("All fields are required!");
    } else if (formData.weight < 1) {
      return alert("All fields are required!");
    }
    const data = {
      model: formData.model,
      imageUrl: formData.imageUrl,
      price: formData.price,
      weight: formData.weight,
      speed: formData.speed,
      about: formData.about,
    };

    const url = "http://localhost:3030/data/cars";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": token,
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response.json();

        e.target.reset();
        ctx.page.redirect("/cars");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  }
};
