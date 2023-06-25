import { useRef, useState, ChangeEvent, FormEvent } from "react";
import { Todo } from "../App";
interface TodoFormProps {
  handleSend: (newTodo: Todo) => void;
}

export default function TodoForm({ handleSend }: TodoFormProps) {
  const [todo, setTodo] = useState({ todo: "", desc: "" });
  const inputRef = useRef(null);

  function handleChange(e: ChangeEvent) {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    if (!todo.todo && !todo.desc) return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      completed: false,
      todo: todo.todo,
      desc: todo.desc,
    };
    handleSend(newTodo);
    setTodo({ todo: "", desc: "" });
    inputRef.current?.focus();
    console.log(newTodo);
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="todo"
          ref={inputRef}
          value={todo.todo}
          onChange={handleChange}
        />
        <textarea
          name="desc"
          placeholder="description"
          id=""
          value={todo.desc}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="create" />
      </form>
    </>
  );
}
