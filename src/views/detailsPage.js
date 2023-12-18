import { html } from "../../node_modules/lit-html/lit-html.js";

const detailsTemplate = (car, owner) => html`
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
                <a href="" id="edit-btn">Edit</a>
                <a href="" id="delete-btn">Delete</a>
              </div>
            `
          : ""}
      </div>
    </div>
  </section>
`;

export const detailsPage = async (ctx) => {
  const id = ctx.params.id;
  const owner = ctx.user._id;

  const url = `http://localhost:3030/data/cars/${id}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const car = await response.json();

    ctx.render(detailsTemplate(car, owner));
  } else {
    console.error(`HTTP error! Status: ${response.status}`);
  }
};
