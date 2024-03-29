"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var coffeeInput = coffeeChoice.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast || selectedRoast === "all" ) && coffee.name.toLowerCase().indexOf(coffeeInput) !== -1){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}






// <form class="form1">
//     <label for="roast-selection"></label>
//     <select id="roast-selection">
//     <option>light</option>
//     <option>medium</option>
//     <option>dark</option>
//     </select>
//     <button id="submit" type="submit" > Submit</button>
//     </form>
//
//
//     <form class="form2">
//     <label for="inputCoffee"></label>
//     <input id="inputCoffee" name="inputCoffee" type="text">
//     <button type="submit">Submit </button>
//     </form>

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


coffees.reverse();

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var coffeeChoice = document.querySelector('#inputCoffee');
var roastSelection = document.querySelector('#roast-selection');


tbody.innerHTML = renderCoffees(coffees);
coffeeChoice.addEventListener('keyup', updateCoffees);
submitButton.addEventListener('click', updateCoffees);