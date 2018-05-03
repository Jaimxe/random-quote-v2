// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes =[
  {
    quote:"Maybe it is stupid, but its also dumb",
    source: "Patrick Star"
  },
  {
    quote:"Behind every great man, is a woman rolling her eyes.",
    source:"Jim Carrey"
  },
  {
    quote:"No man has a good enough memory to be a succesful liar.",
    source:"Abraham Lincoln"
  },
  {
    quote:"Im sorry, if you were right I'd agree with you.",
    source:"Robin Williams"
  },
  {
    quote: "Weather forcast for tonight: Dark.",
    source:"George Carlin"
  }
];
//variables
var randomQuote;
var author;

//funtion to get random random quote
function printQuote(){
  var randomNum = Math.floor(Math.random() * quotes.length)
    randomQuote = quotes[randomNum].quote;
    author = quotes[randomNum].source;
    document.getElementById("quote").innerHTML =  randomQuote;
    document.getElementById("source").innerHTML =  author;
}
