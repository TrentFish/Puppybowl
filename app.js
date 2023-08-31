const puppy = document.querySelector(".puppy");
console.log(puppy);

async function getPlayers(){
    const info = await fetch(" https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players");
    const jason = await info.json();
    const players = jason.data;

    console.log(players);
    const html = players.players.map(player => {
        return `
        <div>
            <a href="#${player.id}">${player.name}</a>
            <p>${player.breed}</p>
        </div>
        `;
    }).join("");
    puppy.innerHTML = html;
}

getPlayers();