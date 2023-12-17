import { html } from "../../node_modules/lit-html/lit-html.js";

const detailsTemplate = () => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="./images/pagani.jpg" alt="example1" />
      <p id="details-title">Pagani Huayra</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="price">Price: €1,010,310</p>
          <p class="weight">Weight: 1350 kg</p>
          <p class="top-speed">Top Speed: 360 kph</p>
          <p id="car-description">
            The Pagani Huayra is a breathtaking hypercar that seamlessly blends
            art and engineering, representing the epitome of automotive
            craftsmanship. Its striking exterior features aerodynamic curves and
            gull-wing doors, showcasing a design that's both futuristic and
            elegant. Underneath the hood, a meticulously crafted AMG-sourced V12
            engine delivers an exhilarating performance, propelling the Huayra
            to astounding speeds, while the opulent interior envelops the driver
            in a cocoon of luxury, making every journey a symphony of power and
            refinement.
          </p>
        </div>
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          <a href="" id="edit-btn">Edit</a>
          <a href="" id="delete-btn">Delete</a>
        </div>
      </div>
    </div>
  </section>
`;

export const detailsPage = (ctx) => {
  ctx.render(detailsTemplate());
};
