import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_MEMBERS } from "./queries";

function Task1() {
  const { loading, error, data } = useQuery(GET_MEMBERS);

  if (loading) {
    return <h3>Loading members...</h3>;
  }

  if (error) {
    return <h3>Could not load members: {error.message}</h3>;
  }

  const members = data?.users?.data || [];

  return (
    <div>
      <h2>My Gym</h2>

      <h3>Total members: {members.length}</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task1;