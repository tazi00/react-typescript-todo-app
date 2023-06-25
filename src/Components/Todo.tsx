import { useState } from "react";
import Button from "./Button";
import EditBox from "./Editbox";

export default function Todo({
  id,
  todo,
  desc = "no description",
  completed,
  handleCompleted,
  handleDelete,
  handleSetData,
}: // handleEdit,
{
  id: string;
  todo: string;
  desc?: string;
  completed: boolean;
  handleCompleted: (id: string) => void;
  handleDelete: (id: string) => void;
  handleSetData: (id: string, data: object) => void;

  // handleEdit: () => void;
}) {
  const [showEdit, setShowEdit] = useState(false);
  function handleSentData(data: object) {
    handleSetData(id, data);
    setShowEdit((prev) => !prev);
  }
  function handleEdit() {
    setShowEdit((prev) => !prev);
  }

  return (
    <>
      <li>
        {!showEdit && (
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleCompleted(id)}
          />
        )}

        {showEdit ? (
          <EditBox todo={todo} desc={desc} handleSentData={handleSentData} />
        ) : (
          <>
            <h3>{todo.charAt(0).toUpperCase() + todo.slice(1)}</h3>
            <h4>{desc}</h4>
          </>
        )}

        <div className="btns">
          {!showEdit && <Button handleEdit={handleEdit}>Edit</Button>}

          {!showEdit ? (
            <Button handleDelete={handleDelete} id={id}>
              Delete
            </Button>
          ) : (
            <Button handleEdit={handleEdit}>Cancel</Button>
          )}
        </div>
      </li>
    </>
  );
}
