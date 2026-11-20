
import { buildSchema, graphql } from "graphql";

const schema = buildSchema(`
  type Hostel {
    id: ID!
    name: String!
    city: String!
    rooms: [Room]
  }

  type Room {
    number: Int!
    beds: Int!
    rentPerBed: Int!
    hostelId: ID!
    hostel: Hostel
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
  hostels: () =>
    allHostels.map((hostel) => ({
      ...hostel,
      rooms: () => allRooms.filter((room) => room.hostelId === hostel.id)
    })),

  rooms: () =>
    allRooms.map((room) => ({
      ...room,
      hostel: () => allHostels.find((h) => h.id === room.hostelId)
    })),

  room: ({ number }) => {
    const room = allRooms.find((r) => r.number === number);

    if (!room) return null;

    return {
      ...room,
      hostel: () => allHostels.find((h) => h.id === room.hostelId)
    };
  }
};

async function main() {
  const result1 = await graphql({
    schema,
    source: `
      {
        hostels {
          name
          rooms {
            number
            beds
          }
        }
      }
    `,
    rootValue: root
  });

  console.log("All Hostels and Their Rooms:");
  console.log(JSON.stringify(result1.data, null, 2));

  const result2 = await graphql({
    schema,
    source: `
      {
        room(number: 202) {
          number
          hostel {
            name
            city
          }
        }
      }
    `,
    rootValue: root
  });

  console.log("Room 202 with Hostel Details:");
  console.log(JSON.stringify(result2.data, null, 2));
}

main();
