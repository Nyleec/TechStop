const shows = ["https://dhzuxxxhixmwv.cloudfront.net/videoplayback.mp4","https://dhzuxxxhixmwv.cloudfront.net/TheDrive-ftHOME-Resonance.mp4"];
const numShows= shows.length;
var src = "";


function addElement([]) {

    for( let i =0; i<numShows; i++){
        src = shows[i];

        const newDiv = document.createElement("video");
        newDiv.src = src;
        newDiv.autoplay = false;
        newDiv.controls = true;

        const currentDiv = document.getElementById("video");
        document.body.insertBefore(newDiv, currentDiv);
    
        console.log("element added");
    }

  }

addElement(shows);