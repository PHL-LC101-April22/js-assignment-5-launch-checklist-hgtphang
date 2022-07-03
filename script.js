// Write your JavaScript code here!

// const { pickPlanet } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log("the return object is", pickPlanet(listedPlanets));
    }).then(function () {
        console.log("Listed planets is", listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets)
 
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
     //    function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    })
 
 
    let form = this.document.querySelector("form");
    form.addEventListener("submit", function(event){
 
     let pilotName = document.querySelector("input[name=pilotName]");
     let copilotName = document.querySelector("input[name=copilotName]");
     let fuelLevel = document.querySelector("input[name=fuelLevel]");
     let cargoMass = document.querySelector("input[name=cargoMass]");
 
     let faultyItems = document.getElementById("faultyItems");
 
     let pilotNameValue = pilotName.value;
     let copilotNameValue = copilotName.value;
     let fuelLevelValue = fuelLevel.value;
     let cargoMassValue = cargoMass.value;
 
     
     formSubmission(document,faultyItems,pilotNameValue,copilotNameValue,fuelLevelValue,cargoMassValue)
     event.preventDefault();
    })
    
 });