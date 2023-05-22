const jokebutt = document.getElementById("jokebutt");
jokebutt.addEventListener("click", getJoke);
const p_joke = document.getElementById("pjoke");

i=0


function getJoke(e){

    fetch(
        `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,explicit&type=single`,
        {
            method: "GET",
            headers: new Headers({
                Accept: "application/json"
            })
        }
    )
        .then(res => res.json())
        .then(response => {
            
            //console.log(`${response.joke}`)
            let joke = response.joke
            p_joke.innerHTML = joke;

 

            
        })
        .catch(error => console.log(error));

    
}