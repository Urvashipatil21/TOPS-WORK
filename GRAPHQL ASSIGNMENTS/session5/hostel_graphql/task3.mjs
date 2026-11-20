
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

async function main() {
  const result = await graphql({
    schema,
    source: `
      {
        __type(name: "Room") {
          fields {
            name
            type {
              kind
              name
              ofType {
                name
              }
            }
          }
        }
      }
    `
  });

  console.log("Room Type Fields:");

  result.data.__type.fields.forEach((field) => {
    let typeName = field.type.name;

    if (field.type.kind === "NON_NULL") {
      typeName = field.type.ofType.name + "!";
    }

    console.log(`${field.name} : ${typeName}`);
  });
}

main();
