"use strict";
const teamsContainer = document.getElementById("teams-container");
const modal = document.getElementById("modal");
const playersList = document.getElementById("players-list");
const closeModal = document.getElementById("close-modal");
const endpoints = {
    teams: "./../teams.json",
    players: "./../players.json"
};
async function loadTeams() {
    try {
        const response = await fetch(endpoints.teams);
        if (!response.ok)
            throw new Error("Failed to fetch teams");
        const data = await response.json();
        displayTeams(data.teams);
    }
    catch (error) {
        console.error("Error fetching teams:", error);
    }
}
function displayTeams(teams) {
    teams.forEach(team => {
        const teamCard = document.createElement("div");
        teamCard.classList.add("team-card");
        const title = document.createElement("h3");
        title.textContent = `${team.teamName} (${team.abbreviation})`;
        const location = document.createElement("p");
        location.textContent = `Location: ${team.location}`;
        const simpleName = document.createElement("p");
        simpleName.textContent = `Simple Name: ${team.simpleName}`;
        const playersBtn = document.createElement("button");
        playersBtn.textContent = "Players";
        playersBtn.classList.add("players-btn");
        playersBtn.dataset.teamId = team.id.toString();
        playersBtn.addEventListener("click", () => showPlayers(team.id));
        teamCard.appendChild(title);
        teamCard.appendChild(location);
        teamCard.appendChild(simpleName);
        teamCard.appendChild(playersBtn);
        teamsContainer.appendChild(teamCard);
    });
}
async function showPlayers(teamId) {
    try {
        const response = await fetch(endpoints.players);
        if (!response.ok)
            throw new Error("Failed to fetch players");
        const data = await response.json();
        const players = data.players.filter((player) => player.teamId === teamId);
        playersList.innerHTML = "";
        if (players.length === 0) {
            const noPlayers = document.createElement("li");
            noPlayers.textContent = "No players found for this team.";
            playersList.appendChild(noPlayers);
        }
        else {
            players.forEach((player) => {
                const playerItem = document.createElement("li");
                playerItem.textContent = `${player.firstName} ${player.lastName}`;
                playersList.appendChild(playerItem);
            });
        }
        modal.style.display = "flex";
    }
    catch (error) {
        console.error("Error fetching players:", error);
    }
}
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
loadTeams();
