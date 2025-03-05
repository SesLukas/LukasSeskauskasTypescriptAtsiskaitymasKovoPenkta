/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

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
        
        data.teams.forEach((team: { name: string, players: { firstName: string, lastName: string, googleSearch: string }[] }) => {
            
            const teamCard = document.createElement("div");
            teamCard.classList.add("team-card");
            
            const teamTitle = document.createElement("h2");
            teamTitle.textContent = team.name;
            teamCard.appendChild(teamTitle);
            
            
            const playersList = document.createElement("div");
            playersList.classList.add("players-list");
            
            team.players.forEach((player: { firstName: string, lastName: string, googleSearch: string }) => {
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
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
});