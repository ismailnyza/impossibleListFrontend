import React, { useState } from "react";

export function CreateTodo() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  async function submitTodo(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    const todo = { name, description };

    try {
      const response = await fetch("http://localhost:8080/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Todo created:", result);
      setName("");
      setDescription("");
    } catch (error) {
      console.error("There was a problem with the POST request:", error);
    }
  }

  return (
    <div>
      <h1>Create Todo</h1>
      <form onSubmit={submitTodo}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
