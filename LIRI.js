require("dotenv").config();

var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);

var userOption = process.argv[2];
var userInput = process.argv[3];

userInput(userOption, userInput);

function userInput(userOption, userInput){
    switch(userOption){
        case 'concert-this':
            concertData(userInput);
            break;
        case 'spotify-this-song':
            songData(userInput);
            break;
        case 'movie-this':
            movieData(userInput);
        case 'do-what-it-says':
            someData();
        default:
            console.log("Wrong Option. Please use this options to proceed: concert-this, spotify-this-song, movie-this, do-what-it-says");
    }
}