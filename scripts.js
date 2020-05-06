// Write your JavaScript code here.
// Remember to pay attention to page loading!
var isLoaded = false;


const modifyShuttleHeight = (direction, height) => {
   if(direction == "increase"){
    height = 10000;
    }else if(direction == "decrease") {
        height = -10000;

}
document.getElementById("spaceShuttleHeight")..innerHTML =
    parseInt(document.getElementById("spaceShuttleHeight").innerHTML) +
    height;
};
const moveRocket = (direction) => {
    switch (direction){
        case"right":
        document.getElementById("rocket").style.left =
            parseInt(
                document.getElementById("rocket").style.left.replace("px","")
                ) +
            10 +
            "px";
        break;

        case"left":
        document.getElementById("rocket").style.left =
            parseInt(
            document.getElementById("rocket").style.left.replace("px", "")
            ) -
             10 +
             "px";
        break;

        default:
            break;
    }
};
window.onload = (event) => {
    if(document.body !== undefined || document.body !== null) {
        isLoaded = true;

    document.getElementById("takeoff").onclick = (event) => {
       var liftOffResults = confirm("Confirm that the shuttle is ready for takeoff");


    if(liftOffResults) {
        document.getElementById("flightStatus").innerHTML =
        "Shuttle in flight.";

        document.getElementById("shuttleBackground").style.backgroundColor = "blue";

        modifyShuttleHeight("increase");
    }
    };
    document.getElementById("landing").onclick = (event) => {
        alert("The shuttle is landing. Landing gear engaged.");
    };
    document.getElementById("flightStatus").innerHTML =
    "The shuttle has landed.";

    document.getElementById("shuttleBackground").style.backgroundColor =
    "green";

    modifyShuttleHeight("decrease");
};
    document.getElementById("missionAbort").onclick = (event) => {
    var abort = confirm("Confirm that you want to abort the mission");

if(abort){
    document.getElementById("flightStatus").innerHTML =
    "Mission aborted.";

    document.getElementById("shuttleBackground").style.backgroundColor =
    "green";

    modifyShuttleHeight("decrease");
    }
};
    document.getElementById("up").onclick =(event) => {
        modifyShuttleHeight("increase");
       };
    document.getElementById("down").onclick =(event) => {

       };
    document.getElementById("right").onclick =(event) => {
        moveRocket("right");
      };
    document.getElementById("left").onclick =(event) => {
        moveRocket("left");
    };
  }
};
