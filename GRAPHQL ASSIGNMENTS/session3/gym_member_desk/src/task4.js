
import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_MEMBERS } from "./queries";

function Task4() {
  const { loading, error, data } = useQuery(GET_MEMBERS);

  if (loading) return <h3>Loading members...</h3>;

  if (error) {
    return (
      <h3 style={{ color: "red" }}>
        Could not load members: {error.message}
      </h3>
    );
  }

  const members = data?.users?.data || [];

  let totalFees = 0;

  return (
    <div>
      <h2>My Gym Members</h2>
      <h3>Total members: {members.length}</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Plan</th>
            <th>Fees</th>
          </tr>
        </thead>

        <tbody>
          {members.map((member) => {
            const id = Number(member.id);
            const isAnnual = id % 3 === 0;
            const fees = isAnnual ? 7000 : 800;

            totalFees += fees;

            return (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{isAnnual ? "Annual" : "Monthly"}</td>
                <td>₹{fees.toLocaleString("en-IN")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>Total Fees: ₹{totalFees.toLocaleString("en-IN")}</h3>
    </div>
  );
}

export default Task4;
