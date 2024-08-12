import { useEffect, useState } from "react";
import TodoItem from "./todoitem";

export default function AllTodos() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/tasks/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Render loading or error states
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data from API</h1>
      {data.map(
        (todo) => (
          console.log(todo),
          (
            <div key={todo.id} className="todoItem">
              <TodoItem todo={todo} />
            </div>
          )
        ),
      )}
    </div>
  );
}
