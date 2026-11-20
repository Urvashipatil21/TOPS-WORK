
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

// Run Mutation
const mutationResult = await graphql({
    schema,
    source: `mutation {
        addDish(name: "Jeera Rice", price: 40, veg: true) {
            id
            name
            price
            veg
        }
    }`,
    rootValue
});

console.log("===== MUTATION RESULT =====");
console.log(JSON.stringify(mutationResult, null, 2));

// Run Query
const queryResult = await graphql({
    schema,
    source: `{ dishes { name price } }`,
    rootValue
});

console.log("===== UPDATED DISHES =====");
console.log(JSON.stringify(queryResult, null, 2));
