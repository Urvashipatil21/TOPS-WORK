
import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client/react";
import {
  GET_MEMBERS,
  UPDATE_MEMBER,
  DELETE_MEMBER
} from "./queries";

function Member() {
  const { loading, error, data } = useQuery(GET_MEMBERS);

  const [updateMember] = useMutation(UPDATE_MEMBER);

  const [deleteMember] = useMutation(DELETE_MEMBER, {
    update(cache, { data }) {
      const deletedId = data?.deleteUser?.id;

      if (deletedId) {
        cache.evict({
          id: cache.identify({
            __typename: "User",
            id: deletedId
          })
        });

        cache.gc();
      }
    }
  });

  const [editingId, setEditingId] = useState(null);
  const [newEmail, setNewEmail] = useState("");

  const handleEdit = (member) => {
    setEditingId(member.id);
    setNewEmail(member.email);
  };

  const handleSave = async (member) => {
    if (!newEmail.trim()) {
      alert("Email cannot be empty!");
      return;
    }

    try {
      await updateMember({
        variables: {
          id: member.id,
          input: {
            email: newEmail.trim()
          }
        }
      });

      setEditingId(null);
      alert("Email updated successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = async (member) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this member?"
    );

    if (!confirmDelete) return;

    try {
      await deleteMember({
        variables: {
          id: member.id
        }
      });

      alert("Member removed successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <p>Loading members...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Gym Members List</h2>

      <p>Total Members: {data.users.data.length}</p>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.users.data.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>

              <td>
                {editingId === member.id ? (
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                ) : (
                  member.email
                )}
              </td>

              <td>
                {editingId === member.id ? (
                  <button onClick={() => handleSave(member)}>
                    Save
                  </button>
                ) : (
                  <button onClick={() => handleEdit(member)}>
                    Edit Email
                  </button>
                )}

                {" "}

                <button onClick={() => handleDelete(member)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Member;


