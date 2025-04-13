const videos = ["videoplayback.mp4","TheDrive-ftHOME-Resonance.mp4","Drive2"];
const numVids= videos.length;

function addElement() {

    for( let i =0; i<numVids; i++){

        const newDiv = document.createElement("video");
        newDiv.src = "https://dhzuxxxhixmwv.cloudfront.net/" + videos[i];
        newDiv.controls = true;

        const currentDiv = document.getElementById("video");
        document.body.insertBefore(newDiv, currentDiv);
    
        console.log("element added, URL =" + videos[i]);
    }

  }

addElement();

/* Search button code only for videos
function search(string){
var term = string;

for (let i = 0; i <numVids; i++){
    if ( string == numVids[i]) return console.log("yes")
        else

    return console.log("no")
}

}
*/