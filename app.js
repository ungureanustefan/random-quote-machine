const QUOTES = [
    {
      quote: "The unexamined life is not worth living.",
      author: "-Socrates"
    },
    {
    quote: "Happiness is not an ideal of reason but of imagination.",
    author: "-Immanuel Kant"
    },
    {
      quote: "Science is what you know. Philosophy is what you don't know.",
      author: "-Bertrand Russell"
    },
    {
      quote: "He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god.",
      author: "-Aristotle"
    },
    {
      quote: "You can discover more about a person in an hour of play than in a year of conversation.",
      author: "-Plato"
    },
    {
      quote: "I would never die for my beliefs because I might be wrong.",
      author: "-Bertrand Russell"
    },
    {
      quote: "Morality is not the doctrine of how we may make ourselves happy, but of how we may make ourselves worthy of happiness.",
      author: "-Immanuel Kant"
    },
    {
      quote: "Man is born free, but is everywhere in chains.",
      author: "Jean-Jacques Rousseau"
    },
    {quote: "Everything that exists is born for no reason, carries on living through weakness, and dies by accident.",
    author: "-Jean-paul Sartre",
    }
  ];
    
  window.onload = inside;
    
    function inside() {
      generateQuote()
    }
    function generateQuote() {
      
 let quoteSize = QUOTES.length;
 let random = Math.floor(Math.random() * quoteSize);
 let randomQuote = QUOTES[random];
      
 let twitterLink = "https://twitter.com/intent/tweet?&amp;related=freecodecamp&amp;text=";
      
      let quoteInApiFormat = randomQuote.quote.replace(/ /g, "%20");
      let authorInApiFormat = randomQuote.author.replace(/ /g, "%20");
       twitterLink += quoteInApiFormat;
       twitterLink += authorInApiFormat;


 
     document.getElementById("tweet-quote").href = twitterLink;
      document.getElementById("text").innerText = randomQuote.quote;
 document.getElementById("author").innerText = randomQuote.author;
}

var randomColor = Math.floor(Math.random()*16777215).toString(16);

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}

genNew.addEventListener("click", setBg);
setBg();