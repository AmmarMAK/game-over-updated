let gameData = document.querySelector(".gameData");
let gameDetails = document.querySelector(".gameDetails");
let navBar = document.getElementById("navBar");
let section = document.getElementById("section");
let closeWindow = document.getElementById("closeWindow");
export async function getDetails(id) {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9d2d61daadmshc7d1855519718aap1355a8jsn03258e8e54bc",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const detailsAPI = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/game?id=452",
    options
  );

  const gamesDetailsFinal = await detailsAPI.json();

  console.log(gamesDetailsFinal);
  gameData.classList.add("d-none");
  navBar.classList.add("d-none");
  section.classList.add("d-none");
  gameDetails.classList.remove("d-none");
}

function hideDetails() {
  gameDetails.classList.add("d-none");
  gameData.classList.remove("d-none");
  navBar.classList.remove("d-none");
  section.classList.remove("d-none");
}

closeWindow.addEventListener("click", hideDetails);
