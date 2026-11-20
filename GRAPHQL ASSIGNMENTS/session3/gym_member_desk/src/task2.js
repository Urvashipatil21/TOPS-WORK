import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_MEMBERS } from "./queries";

function Task2() {
  const { loading, error, data } = useQuery(GET_MEMBERS);

  if (loading) {
    return <h3>Loading members...</h3>;
  }

  if (error) {
    return (
      <h3 style={{ color: "red" }}>
        Could not load members: {error.message}
      </h3>
    );
  }

  const members = data?.users?.data || [];

  return (
    <div>
      <h2>Gym Members</h2>
      <h3>Total members: {members.length}</h3>

      {members.map((member) => (
        <p key={member.id}>
          {member.id}. {member.name} - {member.email}
        </p>
      ))}
    </div>
  );
}

export default Task2;