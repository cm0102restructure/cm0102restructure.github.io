// Call updateContent() on page load
window.addEventListener("DOMContentLoaded", async () => {
  todaysDate();
});

function todaysDate() {
  // Create a new Date object
  const currentDateTime = new Date();

  // Extract the date and time components
  const time = currentDateTime.getHours();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[currentDateTime.getDay()];
  const day = currentDateTime.getDate();
  const month = currentDateTime.getMonth();
  const year = currentDateTime.getFullYear().toString().substr(-2);
  const date =
    day + "." + month + "." + year + " " + (time >= 12 ? "PM" : "AM");

  const dateDisplayElement = document.getElementById("date");
  const timeDisplayElement = document.getElementById("time");

  // Display the date and time in the span element
  dateDisplayElement.textContent = `${dayOfWeek}`;
  timeDisplayElement.textContent = `${date}`;
}

function showHideCompsTable() {
  const compsTableElement = document.getElementById("comps-table");
  if (compsTableElement.style.visibility == "visible")
    compsTableElement.style.visibility = "hidden";
  else compsTableElement.style.visibility = "visible";
}

function setHomeText() {
  const homeText =
    "Welcome to the overview on the 2025/26 restructure patch, created by davdav. Here you'll be able to download the patch and read detailed info about what's been changed, along with some preview images.";
  const compsTableElement = document.getElementById("content-text");
  compsTableElement.innerHTML = homeText;
}

function setDownloadText() {
  $("#content-text").load("download.html");
}

function setChangesText() {
  $("#content-text").load("changelog.html");
}

function setPreviewsText() {
  const homeText = "Previews here";
  const compsTableElement = document.getElementById("content-text");
  compsTableElement.innerHTML = homeText;
}
