export default function Actions({
  setFilter,
  handleClear,
}: {
  setFilter: (data: string) => void;
  handleClear: () => void;
}) {
  return (
    <>
      <ul className="actions">
        <li onClick={() => setFilter("completed")}>Completed</li>
        <li onClick={() => setFilter("all")}>All</li>
        <li onClick={() => setFilter("notCompleted")}>Not Completed</li>
        <li onClick={handleClear}>Clear</li>
      </ul>
    </>
  );
}
