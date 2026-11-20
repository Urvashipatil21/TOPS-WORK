
import React, { useState } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_MEMBERS } from "./queries";

function Task3() {
  const { loading, error, data } = useQuery(GET_MEMBERS);
  const [search, setSearch] = useState("");

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

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase()) ||
    member.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>My Gym</h2>

      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>
        Showing {filteredMembers.length} of {members.length} members
      </h3>

      {filteredMembers.length === 0 ? (
        <p>No member found</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {filteredMembers.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Task3;
