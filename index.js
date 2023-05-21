import "https://unpkg.com/navigo"; //Will create the global Navigo object used below
import "https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.4.0/purify.min.js";

import {
  setActiveLink,
  adjustForMissingHash,
  renderTemplate,
  loadTemplate,
} from "./utils.js";

// Javascript bliver importeret

import { initDelivery } from "./pages/delivery/delivery.js";
import { initProducts } from "./pages/product/product.js";

// Html sider hentes med async await og loadTemplate
window.addEventListener("load", async () => {
  const templateNotFound = await loadTemplate("./pages/notFound/notFound.html");
  const templateDelivery = await loadTemplate("./pages/delivery/delivery.html");
  const templateProducts = await loadTemplate("./pages/product/product.html");

  adjustForMissingHash();

  const router = new Navigo("/", { hash: true });

  window.router = router;

  router
    .hooks({
      before(done, match) {
        setActiveLink("menu", match.url); // hvad for en link der er valgt
        done();
      },
    })
    // Router har en on metode
    .on({
      "/": () =>
        (document.getElementById("content").innerHTML = `<h2>Exam</h2>
      <p style='margin-top:2em'>
      Exam for Marcus Holje
      </p>
     `),
      "/delivery": () => {
        renderTemplate(templateDelivery, "content");
        initDelivery();
      },

      "/products": () => {
        renderTemplate(templateProducts, "content");
        initProducts();
      },
    })

    .notFound(() => {
      renderTemplate(templateNotFound, "content");
    })
    .resolve();
});

window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
  alert(
    "Error: " +
      errorMsg +
      " Script: " +
      url +
      " Line: " +
      lineNumber +
      " Column: " +
      column +
      " StackTrace: " +
      errorObj
  );
};
