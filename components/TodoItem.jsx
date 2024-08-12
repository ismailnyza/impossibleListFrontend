import React from "react";
import { Card, Space, Tag } from "antd";

export default function TodoItem({ todo }) {
  return (
    <div className="todoItem my-4">
      <Card className="shadow-lg rounded-lg p-4 w-full bg-gray-800 text-white border-none">
        <Space direction="vertical" className="w-full">
          <div className="flex items-center justify-between">
            <span
              className={`text-lg font-semibold ${
                todo.completed ? "line-through text-gray-500" : "text-gray-100"
              }`}
            >
              {todo.title}
            </span>
            <Tag
              color={
                todo.priority === "High"
                  ? "red"
                  : todo.priority === "Medium"
                    ? "orange"
                    : "green"
              }
            >
              {todo.priority || "No Priority"}
            </Tag>
          </div>

          <p
            className={`mt-2 text-sm ${
              todo.completed ? "line-through text-gray-500" : "text-gray-400"
            }`}
          >
            {todo.description || "No description provided"}
          </p>

          {todo.notes && (
            <div className="mt-4">
              <label className="block mb-1 text-sm font-medium text-gray-500">
                Notes
              </label>
              <div className="w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-gray-300">
                {todo.notes}
              </div>
            </div>
          )}

          {todo.subtasks && (
            <div className="mt-4">
              <label className="block mb-1 text-sm font-medium text-gray-500">
                Subtasks
              </label>
              <div className="w-full p-2 border border-gray-700 rounded-md bg-gray-900 text-gray-300">
                {todo.subtasks}
              </div>
            </div>
          )}
        </Space>
      </Card>
    </div>
  );
}
