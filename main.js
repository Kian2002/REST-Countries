import countries from "./src/data";
import generateOptions from "./src/options";
import changeTheme from "./src/theme";

document.addEventListener("DOMContentLoaded", () => {
  generateOptions();
  countries();

  document.getElementById("mode").onclick = changeTheme;
});
