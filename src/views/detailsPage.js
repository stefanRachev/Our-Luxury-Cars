import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAccessToken } from "../utils.js";

const detailsTemplate = (car, owner, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${car.imageUrl}" alt="example1" />
      <p id="details-title">${car.model}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="price">Price: ${car.price}</p>
          <p class="weight">Weight: ${car.weight}</p>
          <p class="top-speed">Top Speed: ${car.speed}</p>
          <p id="car-description">${car.about}</p>
        </div>
        ${car._ownerId === owner
          ? html`
              <div id="action-buttons">
                <a href="/edit/${car._id}" id="edit-btn">Edit</a>
                <a
                  @click="${onDelete}"
                  href="javascript:void(0)"
                  id="delete-btn"
                  >Delete</a
                >
              </div>
            `
          : ""}
      </div>
    </div>
  </section>
`;

export const detailsPage = async (ctx) => {
  const id = ctx.params.id;
  const owner = ctx.user ? ctx.user._id : null;
  const token = getAccessToken();

  const url = `http://localhost:3030/data/cars/${id}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const car = await response.json();

    ctx.render(detailsTemplate(car, owner, onDelete));
  } else {
    console.error(`HTTP error! Status: ${response.status}`);
  }

  async function onDelete(e) {
    e.preventDefault();
    const url = `http://localhost:3030/data/cars/${id}`;

    const choice = confirm("Are you sure you wont to delete this car?");
    if (choice) {
      await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": token,
        },
      });
      ctx.page.redirect("/cars");
    }
  }
};
