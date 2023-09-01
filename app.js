const puppy = document.querySelector(".puppy");
const details = document.querySelector(".details");

let players;

async function getPlayers(){
    const info = await fetch(" https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players");
    const jason = await info.json();
    players = jason.data;
    render();
}

function render(){
    const hash = window.location.hash.slice(1)*1;
    const html = players.players.map(player => {
        return `
        <div>
            <a href="#${player.id !== hash ? player.id: ""}" class="${player.id === hash ? "selected": ""}">${player.name}</a>
        </div>
        `;
    }).join("");
    puppy.innerHTML = html;

    const player = players.players.find(player => {
        return player.id === hash;
    });

    let detailsHTML = "No pup selected!";
    if(player){
        detailsHTML = `
        <h2>Name: ${player.name}</h2>
        <h3>Breed: ${player.breed}</h3>
        <p>Status: ${player.status}</P>
        <img src="${player.imageUrl}" alt="Player Image">
        `;
    }
    details.innerHTML = detailsHTML;
}

window.addEventListener("hashchange", () =>{
    render();
});

getPlayers();