/* ------------------------------ TASK 9 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos: pilnas pavadinimas, paprastas pavadinimas, trumpinys, lokacija ir mygtukas "Players", kurį paspaudus bus kreipiamasi į players.json ir atidaromas modalas su visais TOS komandos žaidėjais.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

// const TEAMS_ENDPOINT = 'teams.json';
// const PLAYERS_ENDPOINT = 'players.json';

interface Team {
    id: number;
    abbreviation: string;
    teamName: string;
    simpleName: string;
    location: string;
}

interface Player {
    firstName: string;
    lastName: string;
    id: number;
    teamId: number;
}

const teamsContainer = document.getElementById("teams-container") as HTMLDivElement;
const modal = document.getElementById("modal") as HTMLDivElement;
const playersList = document.getElementById("players-list") as HTMLUListElement;
const closeModal = document.getElementById("close-modal") as HTMLSpanElement;

const endpoints = {
    teams: "./../teams.json",
    players: "./../players.json"
};

// Užkrauti komandas
async function loadTeams() {
    try {
        const response = await fetch(endpoints.teams);
        if (!response.ok) throw new Error("Failed to fetch teams");
        const data = await response.json();
        displayTeams(data.teams);
    } catch (error) {
        console.error("Error fetching teams:", error);
    }
}

// Atvaizduoti komandas be `innerHTML`
function displayTeams(teams: Team[]) {
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

// Užkrauti žaidėjus ir atidaryti modalą
async function showPlayers(teamId: number) {
    try {
        const response = await fetch(endpoints.players);
        if (!response.ok) throw new Error("Failed to fetch players");
        const data = await response.json();

        // Filtruojame tik tos komandos žaidėjus
        const players: Player[] = data.players.filter((player: Player) => player.teamId === teamId);

        // Išvalome ankstesnius žaidėjus
        playersList.innerHTML = "";

        if (players.length === 0) {
            const noPlayers = document.createElement("li");
            noPlayers.textContent = "No players found for this team.";
            playersList.appendChild(noPlayers);
        } else {
            players.forEach((player: Player) => {
                const playerItem = document.createElement("li");
                playerItem.textContent = `${player.firstName} ${player.lastName}`;
                playersList.appendChild(playerItem);
            });
        }

        // Rodyti modalą
        modal.style.display = "flex";
    } catch (error) {
        console.error("Error fetching players:", error);
    }
}

// Modal uždarymo logika
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Pradėti krovimą
loadTeams();
