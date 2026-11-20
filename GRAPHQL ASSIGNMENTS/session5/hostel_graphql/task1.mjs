

import { buildSchema, graphql } from "graphql";

const schema = buildSchema(`
  type Hostel {
    id: ID!
    name: String!
    city: String!
  }

  type Room {
    number: Int!
    beds: Int!
    rentPerBed: Int!
    hostelId: ID!
  }

  type Query {
    hostels: [Hostel]
    rooms: [Room]
    room(number: Int!): Room
  }
`);

const allHostels = [
  { id: "1", name: "Sunrise Hostel", city: "Ahmedabad" },
  { id: "2", name: "Green Valley Hostel", city: "Jaipur" }
];

const allRooms = [
  { number: 101, beds: 2, rentPerBed: 5000, hostelId: "1" },
  { number: 102, beds: 3, rentPerBed: 4500, hostelId: "1" },
  { number: 103, beds: 2, rentPerBed: 5500, hostelId: "1" },
  { number: 201, beds: 2, rentPerBed: 4000, hostelId: "2" },
  { number: 202, beds: 3, rentPerBed: 3500, hostelId: "2" },
  { number: 203, beds: 2, rentPerBed: 4500, hostelId: "2" }
];

const root = {
  hostels: () => allHostels,
  rooms: () => allRooms,
  room: ({ number }) => allRooms.find((r) => r.number === number) || null
};

async function main() {
  const result1 = await graphql({
    schema,
    source: `{ room(number: 202) { number beds rentPerBed hostelId } }`,
    rootValue: root
  });

  console.log("Room 202:");
  console.log(result1.data.room);

  const result2 = await graphql({
    schema,
    source: `{ room(number: 999) { number beds rentPerBed hostelId } }`,
    rootValue: root
  });

  console.log("Room 999:");
  console.log(result2.data.room);
}

main();
