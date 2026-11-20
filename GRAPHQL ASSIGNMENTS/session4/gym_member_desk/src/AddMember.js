

import React, { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { ADD_MEMBER, GET_MEMBERS } from "./queries";

function AddMember() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [addMember, { loading, error }] = useMutation(ADD_MEMBER, {
    update(cache, { data }) {
      const newMember = data?.createUser?.user;

      if (!newMember) return;

      cache.updateQuery(
        { query: GET_MEMBERS },
        (existingData) => {
          if (!existingData) return existingData;

          return {
            ...existingData,
            users: {
              ...existingData.users,
              data: [...existingData.users.data, newMember],
            },
          };
        }
      );
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Name cannot be empty!");
      return;
    }

    try {
      await addMember({
        variables: {
          input: {
            name: name.trim(),
            email: email.trim(),
          },
        },
        optimisticResponse: {
          createUser: {
            __typename: "CreateUserPayload",
            user: {
              __typename: "User",
              id: `temp-${Date.now()}`,
              name: name.trim(),
              email: email.trim(),
            },
          },
        },
      });

      setName("");
      setEmail("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Add New Member</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add member"}
        </button>
      </form>

      {error && (
        <p style={{ color: "red" }}>
          Error: {error.message}
        </p>
      )}
    </div>
  );
}

export default AddMember;
