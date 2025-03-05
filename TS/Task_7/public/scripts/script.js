"use strict";
const ENDPOINT = 'NBA.json';
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("./../NBA.json");
        const data = await response.json();
        const output = document.getElementById("output");
        if (!output) {
            console.error("Output element not found!");
            return;
        }
        data.teams.forEach((team) => {
            const teamCard = document.createElement("div");
            teamCard.classList.add("team-card");
            const teamTitle = document.createElement("h2");
            teamTitle.textContent = team.name;
            teamCard.appendChild(teamTitle);
            const playersList = document.createElement("div");
            playersList.classList.add("players-list");
            team.players.forEach((player) => {
                const playerCard = document.createElement("div");
                playerCard.classList.add("player-card");
                const playerName = document.createElement("p");
                playerName.textContent = `${player.firstName} ${player.lastName}`;
                const playerLink = document.createElement("a");
                playerLink.href = player.googleSearch;
                playerLink.textContent = "More Info";
                playerLink.target = "_blank";
                playerCard.appendChild(playerName);
                playerCard.appendChild(playerLink);
                playersList.appendChild(playerCard);
            });
            teamCard.appendChild(playersList);
            output.appendChild(teamCard);
        });
    }
    catch (error) {
        console.error("Error fetching data: ", error);
    }
});
