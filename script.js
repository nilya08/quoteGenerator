const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("block-quote");
const aurther = document.getElementById("aurther");
const btn = document.getElementById("btn");
const tweet = document.getElementById("tweet");


async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    aurther.innerHTML = data.author;

}
getQuote(api_url);
btn.addEventListener("click",function(){
    getQuote(api_url);
});

tweet.addEventListener("click",function(){
    window.open("https://twitter.com/intent/tweet?text=",+quote.innerHTML,"-by ",+aurther.innerHTML,"tweet","width=600","height=300")
})
