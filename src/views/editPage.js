import { html } from "../../node_modules/lit-html/lit-html.js";

const editTemplate = (car, onSubmit) => html`
  <section id="edit">
    <div class="form form-auto">
      <h2>Edit Your Car</h2>
      <form @submit="${onSubmit}" class="edit-form">
        <input
          type="text"
          name="model"
          id="model"
          placeholder="Model"
          value="${car.model}"
        />
        <input
          type="text"
          name="imageUrl"
          id="car-image"
          placeholder="Your Car Image URL"
          value="${car.imageUrl}"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
          value="${car.price}"
        />
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="Weight in Kg"
          value="${car.weight}"
        />
        <input
          type="text"
          name="speed"
          id="speed"
          placeholder="Top Speed in Kmh"
          value="${car.speed}"
        />
        <textarea
          id="about"
          name="about"
          placeholder="More About The Car"
          rows="10"
          cols="50"
          .value="${car.about}"
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`;

export const editPage = async (ctx) => {
  const id = ctx.params.id;
  const token = ctx.user.accessToken;
  console.log(token);
  console.log(id);

  const url = `http://localhost:3030/data/cars/${id}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const car = await response.json();
    ctx.render(editTemplate(car, onSubmit));
  }

  async function onSubmit(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).some((el) => el === "")) {
      return alert("All fields are required!");
    }
    const url = `http://localhost:3030/data/cars/${id}`;

    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": token,
      },
      body: JSON.stringify(formData),
    });

    ctx.page.redirect("/details/" + id);
  }
};
