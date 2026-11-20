
import { buildSchema, graphql } from "graphql";
import notices from "../data/notices";

const schema = buildSchema(`
  type Notice {
    id: Int!
    title: String!
    category: String!
    date: String!
    body: String!
    urgent: Boolean!
  }

  type Query {
    notices: [Notice]
    notice(id: Int!): Notice
  }
`);

const root = {
  notices: () => notices,

  notice: ({ id }) =>
    notices.find((item) => item.id === id) || null
};

export async function runQuery(source) {
  return await graphql({
    schema,
    source,
    rootValue: root
  });
}
