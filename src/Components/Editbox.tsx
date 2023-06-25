import { FormEvent, useState } from "react";

export default function EditBox({
  handleSentData,
  todo,
  desc,
}: {
  handleSentData: (data: object) => void;
  todo: string;
  desc: string;
}) {
  const [data, setData] = useState({ text1: todo, text2: desc });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    handleSentData(data);
  }
  return (
    <>
      <form action="" className="editbox" onSubmit={handleSubmit}>
        <input
          type="text"
          value={data.text1}
          onChange={(e) => setData({ ...data, text1: e.target.value })}
        />
        <textarea
          name=""
          id=""
          value={data.text2}
          onChange={(e) => setData({ ...data, text2: e.target.value })}
        ></textarea>
        <input type="submit" value="save" />
      </form>
    </>
  );
}
