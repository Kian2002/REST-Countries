const changeTheme = () => {
  const curStyle = document.body.style;
  const mode = document.getElementById("mode");

  if (mode.textContent == "Dark Mode") {
    curStyle.setProperty("--elements", "hsl(0, 0%, 100%)");
    curStyle.setProperty("--background", "hsl(0, 0%, 90%)");
    curStyle.setProperty("--text", "hsl(200, 15%, 8%)");
    mode.textContent = "Light Mode";
  } else {
    curStyle.setProperty("--elements", "hsl(209, 23%, 22%)");
    curStyle.setProperty("--background", "hsl(207, 26%, 17%)");
    curStyle.setProperty("--text", "hsl(0, 0%, 100%)");
    mode.textContent = "Dark Mode";
  }
};

export default changeTheme;
