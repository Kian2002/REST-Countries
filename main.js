import countries from "./data";
import generateOptions from "./options";

document.addEventListener("DOMContentLoaded", () => {
  generateOptions();
  countries();
});
