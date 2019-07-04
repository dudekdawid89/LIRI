# **LIRI** Application
## LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.
### In this case Liri giving back three types of informations:
1. Informations about specific songs from Spotify API,
2. Informations about specific movies form OMDG API,
3. Informations about specific artist's concerts form Band In Town API
4. Application is also able to run command using the file.txt

# How to run LIRI application

## To get informations about your lovely **song** you need to type command in the terminal. For example:
node liri.js spotify-this-song ***name your favorite song***

## To get informations about your favorite **movie** you need to type command in the terminal. For example:
node liri.js movie-this ***name your favorite movie***

## To get informations about your favorite **band**  you need to type command in the terminal. For example:
node liri.js spotify-this-song ***name your favorite band***

## To run command form the file.txt (random.txt in this case) you need type command in the terminal:

node liri.js do-what-it-says

# How to run LIRI, examples:

### Spotify API
![alt text](1.png)

### OMDB API

![alt text](2.png)

### Band in Town API

![alt text](3.png)

### Output radom command from the random.txt file

![alt text](4.png)

### Output when you use wrong command

![alt text](5.png)

### Link to GitHub 

[You can find liri.js code in the GitHub link](https://github.com/dudekdawid89/LIRI)


# Technologies
## Liri is based on Node.js and packages:

1. Node-Spotify-API
2. Axios
3. Moment
4. Dotenv

## App using following API's:

1. Spotify API (stored in .env file)
2.  OMDB API (key stored in the URL)
3. Band in Town (key stored in the URL)