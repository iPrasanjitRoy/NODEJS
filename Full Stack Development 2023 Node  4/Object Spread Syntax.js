/* ...req.body: This Spreads All The Properties Of The Req.Body Object Into A New Object. 
id: id:  This Assigns The ID Variable's Value To A Property Named ID In The New Object. */


/* Example Usage */
// Let's Say Req.Body Looks Like This: 

const req = {
    body: {
        name: 'Product A',
        price: 50,
        description: 'Hey Product'
    }
};
const id = 123;

// Then, { ...req.body, id: id } Would Create A New Object Like This 

{
    name: 'Product A',
        price: 50,
            description: 'Hey Product',
                id: 123
}


/* Spread Operator */

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);


const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(numbers)


const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'Red'
}

const updateMyVehicle = {
    type: 'Car',
    year: 2021,
    color: 'Yellow'
}

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }

