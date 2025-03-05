/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = './../NBA.json';


interface Player {
    firstName: string;
    lastName: string;
    googleSearch: string;
}

interface Team {
    name: string;
    players: Player[];
}

interface NBAData {
    teams: Team[];
}

async function fetchData() {
    try {
        const response = await fetch(ENDPOINT);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data: NBAData = await response.json();
        const output = document.getElementById("output");

        if (!output) {
            console.error("❌ Klaida: Output elementas nerastas!");
            return;
        }

        output.innerHTML = ""; 

        data.teams.forEach((team: Team) => {
            const teamCard = document.createElement("div");
            teamCard.classList.add("team");

            const teamTitle = document.createElement("h3");
            teamTitle.textContent = team.name;
            teamCard.appendChild(teamTitle);

            const playersList = document.createElement("ul");
            playersList.classList.add("player-list");

            team.players.forEach((player: Player) => {
                const playerItem = document.createElement("li");

                const playerName = document.createElement("span");
                playerName.textContent = `${player.firstName} ${player.lastName}`;

                const playerLink = document.createElement("a");
                playerLink.href = player.googleSearch;
                playerLink.textContent = "More Info";
                playerLink.target = "_blank";
                playerLink.classList.add("more-info");

                playerItem.appendChild(playerName);
                playerItem.appendChild(playerLink);
                playersList.appendChild(playerItem);
            });

            teamCard.appendChild(playersList);
            output.appendChild(teamCard);
        });

        console.log("✅ Duomenys sėkmingai atvaizduoti.");
    } catch (error) {
        console.error("❌ Klaida: Nepavyko užkrauti duomenų.", error);
    }
}


fetchData();