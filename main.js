import countries from "./src/data";
import generateOptions from "./src/options";

document.addEventListener("DOMContentLoaded", () => {
  generateOptions();
  countries();
});
