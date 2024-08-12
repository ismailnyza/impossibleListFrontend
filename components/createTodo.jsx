import React, { useState } from "react";
import { Input, Button, Form, Card } from "antd";

export function CreateTodo() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const submitTodo = async (event) => {
    event.preventDefault();

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
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <Card className="w-full max-w-lg p-6 shadow-lg rounded-lg bg-gray-800 text-white">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-100">
          Create Todo
        </h1>
        <Form layout="vertical" onSubmit={submitTodo}>
          <Form.Item label="Name" required>
            <Input
              placeholder="Enter task name"
              value={name}
              onChange={handleNameChange}
              className="p-2 border border-gray-700 rounded-md bg-gray-900 text-gray-300"
            />
          </Form.Item>
          <Form.Item label="Description" required>
            <Input.TextArea
              placeholder="Enter task description"
              value={description}
              onChange={handleDescriptionChange}
              rows={4}
              className="p-2 border border-gray-700 rounded-md bg-gray-900 text-gray-300"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={submitTodo}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
