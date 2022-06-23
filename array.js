let cars = [
    {
        "color": "blue",
        "type": "minivan",
        "registration": new Date('2022-02-03'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2022-03-03'),
        "capacity": 5
    },
    {
        "color": "green",
        "type": "minivan",
        "registration": new Date('2022-02-04'),
        "capacity": 6
    },
    {
        "color": "red",
        "type": "minibus",
        "registration": new Date('2022-03-01'),
        "capacity": 4
    },
    {
        "color": "green",
        "type": "ceper",
        "registration": new Date('2022-02-05'),
        "capacity": 4
    }
];

let addFirst = {
    "color": "yellow",
    "type": "cabrio",
    "registration": new Date('2022-03-01'),
    "capacity": 2
}
cars.unshift(addFirst); // unshift = add an object at the first position

let addLast = {
    "color": "blue",
    "type": "minivan",
    "registration": new Date('2022-04-02'),
    "capacity": 7
}
cars.push(addLast); // push = add an object at the last position

let addMid = {
    "color": "white",
    "type": "cabrio",
    "registration": new Date('2022-02-07'),
    "capacity": 6
}
cars.splice(3, 0, addMid); // splice = add an object at the middle position, index where to start, how many items to remove, items to add

let findCar = cars.find(findCar => findCar.color === "red"); // function 'find' returns the first matching element
// let findCar = cars.find(findCar => findCar.color === "red" && findCar.type === "minibus"); // search for multiple value

let colorCar = cars.filter(filterCar => filterCar.color === "red"); // function 'filter' returns all element depend condition

let classCar = cars.map(mappingCar => { // function 'map' transform an array of objects into an array of different objects
    // if (mappingCar.capacity <= 3) {
    //     return "Size: Small";
    // }
    // if (mappingCar.capacity <= 5) {
    //     return "Medium";
    // }
    // return "Large";

    let category = { // create new object if need more value
        "Capacity": mappingCar.capacity,
        "Size": "Small"
    };
    if (mappingCar.capacity > 3){
        category['Size'] = "Medium";
    }
    if (mappingCar.capacity > 5){
        category['Size'] = "Large";
    }
    return category;
});


cars.forEach(newAdd => { // function 'forEach' add a property to every object of an array
    newAdd['size'] = "small";
    if (newAdd.capacity > 3) {
        newAdd['size'] = "medium";
    }
    if (newAdd.capacity > 5) {
        newAdd['size'] = "large";
    }
});

// function 'sort' sort an array by a property
//let sortCar = cars.sort((c1, c2) => (c1.capacity < c2.capacity) ? 1 : (c1.capacity > c2.capacity) ? -1 : 0);

// function 'every, some, includes' checking if objects in array fulfill a condition
//cars.some(car => car.color === "red" && car.type === "cabrio"); // true, includes and some is similar but includes only works for primitive types
//cars.every(car => car.capacity >= 4); // false

console.log(cars);

