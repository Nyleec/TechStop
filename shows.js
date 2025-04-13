const shows = ["https://dhzuxxxhixmwv.cloudfront.net/videoplayback.mp4","https://dhzuxxxhixmwv.cloudfront.net/TheDrive-ftHOME-Resonance.mp4"];
const numShows= shows.length;
var src = "";

//add function to create DOM modules on HTML page and place this loop inside
function getShowURL([]){ 

    for( let i =0; i<numShows; i++){
        var src = shows[i];
        console.log(src);
    }
return console.log("Success");
}


getShowURL(shows);

