// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*   
                 <h2>Mission Destination</h2>
                    <ol>
                        <li>Name: </li>
                        <li>Diameter: </li>
                        <li>Star: ${star}</li>
                        <li>Distance from Earth: </li>
                        <li>Number of Moons:  </li>
                    </ol>
                    <img src=>
   */

}

function validateInput(testInput) {
    let numberTestInput = Number(testInput);
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(numberTestInput)) {
        return "Not a Number";
    } else if (isNaN(numberTestInput) === false)
        return "Is a Number";
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelLevelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    //console.log("st pats");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        window.alert("Please enter all fields");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        window.alert("Please enter a number for fuel level and cargo mass");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Please enter a name for pilot and copilot");
    } else {

        if (fuelLevel < 10000) {
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
            list.style.visability = "visable";
            fuelStatus.innerHTML = "Fuel level is too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            h2.innerHTML = "Shuttle not ready for launch";
            h2.style.color = "rgb(199, 37, 78)";
        }
        if (cargoMass > 10000) {
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
            list.style.visability = "visable";
            fuelStatus.innerHTML = "Fuel level is ready for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            h2.innerHTML = "Shuttle not ready for launch"
            h2.style.color = "rgb(199, 37, 78)";
        }
        if (fuelLevel < 10000 && cargoMass > 10000) {
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
            list.style.visability = "visable";
            fuelStatus.innerHTML = "Fuel level is too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            h2.innerHTML = "Shuttle not ready for launch"
            h2.style.color = "rgb(199, 37, 78)";
        }
        if (fuelLevel >= 10000 && cargoMass <= 10000) {
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
            list.style.visability = "visable";
            fuelStatus.innerHTML = "Fuel level is ready for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            h2.innerHTML = "Shuttle is ready for launch"
            h2.style.color = "rgb(65, 159, 106)";
        }
    }


        async function myFetch() {
            let planetsReturned;
            planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json')
                .then(function (response) {
                    return response.json();
                });
            return planetsReturned;
        }

        function pickPlanet(planets) {
            let randoInt = Math.floor(Math.random() * (respone.length));
            return response[randoInt];
        }
        return pickPlanet;
    }


    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet;
    module.exports.myFetch = myFetch;
