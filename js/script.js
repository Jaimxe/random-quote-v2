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
    source:"George Carlin",
  }
];

//variables
var randomQuote;
var author;


function getRandomQuote(){
  var randomNum = Math.floor(Math.random() * quotes.length);
  return randomNum;
}


function printQuote(){
    selector = getRandomQuote();
    randomQuote = quotes[selector].quote;
    author = quotes[selector].source;
    document.getElementById('quote').innerHTML =  randomQuote;
    document.getElementById('source').innerHTML =  author;
}

/*
// * NOT WORKING *
// * Crashing browser *
//Generate a random RGB Color and save it to an array
var arr =[];
function randomRGB(){
  for(var i = 0; i<3; i+1){
    var num = Math.floor(Math.random() * 256);
    arr.push(num);
  }
  var rgbColor = "rgb (" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
  return rgbColor;
}

*/
