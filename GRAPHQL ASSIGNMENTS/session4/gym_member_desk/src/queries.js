

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

export const ADD_MEMBER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        id
        name
        email
      }
    }
  }
`;

export const UPDATE_MEMBER = gql`
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      name
      email
    }
  }
`;

export const DELETE_MEMBER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;
