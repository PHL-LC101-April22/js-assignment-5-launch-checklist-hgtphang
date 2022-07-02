// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
//    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
//        response.json().then(function(json){
           const missionTarget = document.getElementById("missionTarget");
           missionTarget.innerHTML = `
           <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
           `
//        })
//    })
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if ( testInput === ""){
       return "Empty";
   }else if (typeof(testInput) === Number){
       return "Is a Number";
   }else{
       return "Not a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "" || validateInput(copilot) === "" || validateInput(fuelLevel) === "" || validateInput(cargoLevel) === ""){
        alert("All fields are required");
    }else if(isNaN(validateInput(pilot).value) === false || isNaN(validateInput(copilot).value) === false){
        alert("Please enter valid name for pilot and co-pilot");
    }else if(isNaN(validateInput(fuelLevel).value) === false || isNaN(validateInput(cargoLevel).value) === false){
        alert("Please enter valid number for fuel level and cargo mass (kg)");
    }else{
        document.getElementById("pilotStatus").innerHTML = `Pilot ${validateInput(pilot).value} is ready`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${validateInput(copilot).value} is ready`;

        if (fuelLevel.value <= 10000){
            list.style.visibility = "visible";
            document.getElementById("fuelStatus").innerHTML = "Not enough fuel for the journey";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
        }else if (cargoLevel.value >= 10000){
            list.style.visibility = "visible";
            document.getElementById("cargoStatus").innerHTML = "Too much mass for the shuttle to take off";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
        }else{
            document.getElementById("launchStatus").style.color = "green";
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
