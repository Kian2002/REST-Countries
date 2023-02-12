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
    countries(`https://restcountries.com/v3.1/name/${searchString}`);
  };

  const select = document.createElement("select");
  select.id = "filter";
  select.name = "region";

  const mainOption = document.createElement("option");
  mainOption.value = "all";
  mainOption.textContent = "Filter by Region";
  mainOption.setAttribute("hidden", "hidden");

  select.appendChild(mainOption);
  select.appendChild(generateValues("Africa"));
  select.appendChild(generateValues("America"));
  select.appendChild(generateValues("Asia"));
  select.appendChild(generateValues("Europe"));
  select.appendChild(generateValues("Oceania"));

  select.onchange = () => {
    document.getElementById("countries").remove();
    countries(`https://restcountries.com/v3.1/region/${select.value}`);
  };

  div.appendChild(input);
  div.appendChild(select);

  document.getElementById("main").appendChild(div);
};

const generateValues = (value) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = value;

  return option;
};

export default generateOptions;
