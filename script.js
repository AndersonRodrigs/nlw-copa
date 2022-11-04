function createGame(player1, hur, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do Barsil" />
    <strong>${hur}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da Sérvia" />
  </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style=animation-delay:${delay}s>
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland")) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))


const header = document.querySelector("header")
let count = 0
function changeBackground(bgColors) {
  if (count < bgColors.length) {
    document.body.removeAttribute("class")
    document.body.classList.add(bgColors[count])
    count++
    return
  }
  document.body.removeAttribute("class")
  count = 0
}

const bgsColors = ["green", "yellow"]
header.addEventListener("click", () => {
  changeBackground(bgsColors)
})
