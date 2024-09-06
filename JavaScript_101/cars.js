const cars = [
    {type: "Audi", year: 2012},
    {type: "Volvo", year: 2018},
    {type: "Toyota", year: 2016},
    {type: "BMW", year: 2014},
    {type: "Mercedes", year: 2010}
];




function displayCars() {
    let text = "<ul>"
    for (let i = 0; i < cars.length; i++) {
        text += "<li>" + cars[i].type + " " + cars[i].year + "</li>";
    }
    text += "</ul>";

    document.getElementById("p-names").innerHTML = text;
}
displayCars();

function byName() {
    cars.sort(function(a, b) {
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    displayCars();
}

function byYear() {
    cars.sort(function(a, b) {return b.year - a.year});
    displayCars();
}
