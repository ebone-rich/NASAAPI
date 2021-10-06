//let fetchDate() {
//    return document.getElementById{}.value;
//}

let grabDate = document.querySelector("#search")

grabDate.addEventListener("click", ()=>) {
    console.log("clicked");
    apiRequest()
}

async function apiRequest() {
    let API_KEY = "FZjFzOpNszAHaI7IWM0p1ZQTfcJVlVXOlHTeccf8"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let blast = await response.json()
    console.log(blast)
    getAPIdata(blast)
}

function getAPIdata(blast) {
    document.querySelector("search").innerHTML = blast.explanation
}
  