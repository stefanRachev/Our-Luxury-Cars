import { html } from "../../node_modules/lit-html/lit-html.js";

const catalogTemplate = (cars) => html`
  <h3 class="heading">Our Cars</h3>
  <section id="dashboard">
    ${cars.length < 1
      ? html`<h3 class="nothing">Nothing to see yet</h3>`
      : cars.map(
          (car) => html`
            <div class="car">
              <img src="${car.imageUrl}" alt="example1" />
              <h3 class="model">${car.model}</h3>
              <div class="specs">
                <p class="price">Price: ${car.price}</p>
                <p class="weight">Weight: ${car.weight}</p>
                <p class="top-speed">Top Speed: ${car.speed}</p>
              </div>
              <a class="details-btn" href="/details/${car._id}">More Info</a>
            </div>
          `
        )}
  </section>
`;

export const catalogPage = async (ctx) => {
  const url = "http://localhost:3030/data/cars?sortBy=_createdOn%20desc";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const cars = await response.json();

    ctx.render(catalogTemplate(cars));
  } else {
    console.error(`HTTP error! Status: ${response.status}`);
  }
};
