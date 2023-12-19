import { html } from "../../node_modules/lit-html/lit-html.js";

const searchTemplate = (onSubmit, cars) => html`
  <section id="search">
    <div class="form">
      <h4>Search</h4>
      <form @submit="${onSubmit}" class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <div class="search-result">
      ${cars.length < 1
        ? html` <h2 class="no-avaliable">No result.</h2> `
        : html`
         ${cars.map(
           (car) => html` <div class="car">
             <img src="${car.imageUrl}" alt="example1" />
             <h3 class="model">${car.model}</h3>
             <a class="details-btn" href="/details/${car._id}">More Info</a>
           </div>`
         )}
       
    </div>
  </section>
      `}
    </div>
  </section>
`;

export const searchPage = (ctx) => {
  const cars = [];
  ctx.render(searchTemplate(onSubmit, cars));
  async function onSubmit(e) {
    e.preventDefault();

    // const formData = Object.fromEntries(new FormData(e.target));
    const formData = new FormData(e.target);
    const query = formData.get("search").trim().toLowerCase();
    if (query === "") {
      return alert("Field are required!");
    }

    const url = `http://localhost:3030/data/cars?where=model%20LIKE%20%22${query}%22`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const cars = await response.json();
      ctx.render(searchTemplate(onSubmit, cars));
    }
  }
};
