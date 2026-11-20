
import { buildSchema, graphql } from "graphql";

const schema = buildSchema(`
    type Dish {
        id: ID
        name: String
        price: Int
        veg: Boolean
    }

    type Query {
        kitchenName: String
        dishes: [Dish]
    }

    type Mutation {
        addDish(name: String!, price: Int!, veg: Boolean!): Dish
    }
`);

const dishes = [
    { id: 1, name: "Gujarati Thali", price: 120, veg: true },
    { id: 2, name: "Paneer Butter Masala", price: 150, veg: true },
    { id: 3, name: "Dal Rice", price: 80, veg: true },
    { id: 4, name: "Chicken Biryani", price: 180, veg: false },
    { id: 5, name: "Veg Pulao", price: 90, veg: true },
    { id: 6, name: "Egg Curry", price: 110, veg: false }
];

const rootValue = {
    kitchenName: () => "Urvashi Tiffin Kitchen",
    dishes: () => dishes,

    addDish: ({ name, price, veg }) => {
        const newDish = {
            id: dishes.length + 1,
            name,
            price,
            veg
        };

        dishes.push(newDish);
        return newDish;
    }
};

// Task 1 Query
const result1 = await graphql({
    schema,
    source: `{ kitchenName dishes { name } }`,
    rootValue
});

console.log("===== TASK 1 RESULT =====");
console.log(JSON.stringify(result1, null, 2));

// Task 2 Mutation
const result2 = await graphql({
    schema,
    source: `mutation {
        addDish(name: "Jeera Rice", price: 40, veg: true) {
            id name price veg
        }
    }`,
    rootValue
});

console.log("===== TASK 2 MUTATION =====");
console.log(JSON.stringify(result2, null, 2));

// Updated dishes query
const result3 = await graphql({
    schema,
    source: `{ dishes { name price } }`,
    rootValue
});

console.log("===== SEVEN DISHES =====");
console.log(JSON.stringify(result3, null, 2));

// Task 3: Invalid calories field
const error1 = await graphql({
    schema,
    source: `{ dishes { name calories } }`,
    rootValue
});

console.log("===== ERROR 1 =====");
console.log(error1.errors[0].message);

// Task 3: Invalid price
const error2 = await graphql({
    schema,
    source: `mutation {
        addDish(name: "Test Dish", price: "forty", veg: true) {
            name
        }
    }`,
    rootValue
});

console.log("===== ERROR 2 =====");
console.log(error2.errors[0].message);
