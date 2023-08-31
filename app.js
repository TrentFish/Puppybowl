
async function getPlayers(){
    const info = await fetch(" https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players");
    const jason = await info.json();
    const players = jason.data;
    console.log(players);
}

getPlayers();