//let grabdate() {
//    return document.getElementById{}.value;
//}

 const grabDate = document.getElementById("search");
    console.log(grabDate)

grabDate.addEventListener("click", apiRequest)
//    console.log("clicked");
  //  apiRequest
//)}

async function apiRequest(e) {
    console.log("hello")
    e.preventDefault()
    let API_KEY = "FZjFzOpNszAHaI7IWM0p1ZQTfcJVlVXOlHTeccf8"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let blast = await response.json()
    console.log(blast)
    getAPIdata(blast)
}
//apiRequest()

function getAPIdata(blast) {
   document.getElementById("imgContainer").innerHTML = blast.explanation
   document.getElementById("img").src= blast.url

}
/*   let past = document.getElementById(Date)
   past.innerhtml ='';
   for (let each of Date) {
     let */
     
  
   //Date.appendChild()blast;
 //document.getElementById("content").innerHTML += `img src=${blast.url}`;


/*quoteContainer.appendChild(quote);
quoteContainer.appendChild(quoteBy);
quoteContainer(img);*/