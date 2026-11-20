import { gql } from "@apollo/client";

export const GET_MEMBERS = gql`
  query GetMembers {
    users(options: { paginate: { page: 1, limit: 5 } }) {
      data {
        id
        name
        email
      }
    }
  }
`;