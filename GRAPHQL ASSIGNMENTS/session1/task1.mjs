
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
    dishes: () => dishes
};

const result = await graphql({
    schema,
    source: `{ kitchenName dishes { name } }`,
    rootValue
});

console.log(JSON.stringify(result, null, 2));
