const puppy = document.querySelector(".puppy");
console.log(puppy);

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
            <a href="#${player.id}" class="${player.id === hash ? "selected": ""}">${player.name}</a>
        </div>
        `;
    }).join("");
    puppy.innerHTML = html;
}

window.addEventListener("hashchange", () =>{
    render();
});

getPlayers();