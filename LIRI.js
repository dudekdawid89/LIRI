require("dotenv").config();

var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var axios = require("axios");
// var moment = require("moment");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);

var userOption = process.argv[2];
var userInput = process.argv.slice(3).join(" ");


var userInputData = function(userOption, userInput){
    switch(userOption){
        case 'concert-this':
            concertData(userInput);
            break;
        case 'spotify-this-song':
            songData(userInput);
            break;
        case 'movie-this':
            movieData(userInput);
            break;
        case 'do-what-it-says':
            someData();
            break;
        default:
            console.log("Wrong Option. Please use this options to proceed: concert-this, spotify-this-song, movie-this, do-what-it-says");
    }
}
userInputData(userOption, userInput);

var songData = function(userInput){
    if(userInput === undefined){
        userInput = "The Sign"
    }
    spotify.search({
        type: "track",
        query: userInput
    },
    function(err,data){
        if(err){
            console.log("Error occured:" +err);
            return;
        }
        var tracks = data.tracks.items;

        for(var i=0; i< tracks.length; i++){
            console.log(i);
            console.log("artist(s):" + tracks[i].artists[0].name);
            console.log("The song's name" +tracks[i].name);
            console.log("A preview link of the song:"+ tracks[i].preview_url);
            console.log("Songs:" +tracks[i].album.name);
            
        }
    }
    );
};

var someData = function(){
    fs.readFile("random.txt", "utf8", function(err,data){
        if(err){
            return console.log(err);
        }
        var dataArr = data.split(",");
        userInputData(dataArr[0],dataArr[1]);
    });
}

var movieData = function(userInput){
    if (userInput === undefined){
        userInput = "Mr. Nobody"
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");
    }
    var urlMovie = "http://www.omdbapi.com/?t="+userInput+"&y=&plot=short&apikey=trilogy";
   
    axios.get(urlMovie).then(
  function(response) {
    console.log("Title: " + response.data.Title);
    console.log("Year: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.imdbRating);
    console.log("Rotten Tomatoes Rating: " + response.data.Ratings[0].Value);
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
  }
);
}