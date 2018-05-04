//Random Quote Generator
//Jaime Aguilar
// 05/04/2018

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//quotes
var quotes =[
  {
    quote:"Maybe it is stupid, but it's also dumb.",
    source: "Patrick Star",
    year: "Spongebob SquarePants"
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
    source:"George Carlin",
  }
];

//variables
var randomQuote;
var author;
var timeKeeper;

//call printQuote funtion to give first quote
printQuote();

//generate a random quote number
function getRandomQuote(){
  var randomNum = Math.floor(Math.random() * quotes.length);
  return randomNum;
}
//calls  getRandomQuote function and assigns it to selector var
//prints quote and author from randomly selected
function printQuote(){
  selector = getRandomQuote();
  randomQuote = quotes[selector].quote;
  author = quotes[selector].source;
  document.getElementById('quote').innerHTML =  randomQuote;
  document.getElementById('source').innerHTML =  author;
  document.body.style.backgroundColor = randomColor();
  //if printQuote is called, clear the timer
  clearInterval(timeKeeper);
  //and call the bgTimer function again
  bgTimer();
}

//set timer to call printQuote funtion after 30 seconds
function bgTimer(){
  timeKeeper = setInterval(printQuote, 30000,);
}

// random number for RGB Color
function randomNumber(){
  var randomNum = Math.floor(Math.random() * 256);
  return randomNum;
}

//Generate a random RGB Color
function randomColor(){
  var rgbColor = "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
  return rgbColor;
}
