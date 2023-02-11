import countries from "./data";

const generateOptions = () => {
  const div = document.createElement("div");
  div.id = "options";

  const input = document.createElement("input");
  input.type = "text";
  input.name = "search";
  input.id = "search";
  input.placeholder = "Search for a country...";
  input.value - "";

  input.oninput = (e) => {
    let searchString = e.target.value;
    document.getElementById("countries").remove();
    countries(searchString);
  };

  const button = document.createElement("button");
  button.type = "button";
  button.id = "filter";
  button.textContent = "Filter by Region";

  div.appendChild(input);
  div.appendChild(button);

  document.getElementById("main").appendChild(div);
};

export default generateOptions;
