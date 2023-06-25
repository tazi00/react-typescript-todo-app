import { Todo as TodoType } from "../App";
import Todo from "./Todo";

export default function Todos({
  todos,
  handleCompleted,
  handleDelete,
  handleSetData,
}: {
  todos: TodoType[];
  handleCompleted: (id: string) => void;
  handleDelete: (id: string) => void;
  handleSetData: (id: string, data: object) => void;
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          handleCompleted={handleCompleted}
          handleDelete={handleDelete}
          handleSetData={handleSetData}
        />
      ))}
    </ul>
  );
}
