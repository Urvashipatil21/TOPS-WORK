
import React, { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client/react";
import { GET_MEMBERS } from "./queries";

function App() {
  const client = useApolloClient();

  const [members, setMembers] = useState([]);
  const [lastRefreshed, setLastRefreshed] = useState("");

  const refreshMembers = async () => {
    try {
      const result = await client.query({
        query: GET_MEMBERS,
        fetchPolicy: "network-only"
      });

      setMembers(result.data.users.data);

      setLastRefreshed(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          fractionalSecondDigits: 2
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshMembers();
  }, [client]);

  return (
    <div>
      <h1>My Gym</h1>

      <h2>Total members: {members.length}</h2>

      <button onClick={refreshMembers}>
        Refresh members
      </button>

      <p>Last refreshed at: {lastRefreshed}</p>

      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name} - {member.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
