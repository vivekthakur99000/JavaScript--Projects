const url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");



async function getQuote(url){
    const res = await fetch(url);
    let data = await res.json();
    console.log(data);

    quote.innerHTML = data.content;
    author.innerHTML = `--${data.author}`;

}

getQuote(url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+ "    " + author.innerHTML, "Tweet Window", "width=600,  height=300")
}


