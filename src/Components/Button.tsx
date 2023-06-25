interface ButtonProps {
  children: string;
  handleDelete?: (id: string) => void;
  handleEdit?: () => void;
  id?: string;
}
export default function Button({
  children,
  handleDelete,
  handleEdit,
  id,
}: ButtonProps) {
  return (
    <>
      <button
        onClick={() => {
          handleDelete?.(id);
          handleEdit?.();
        }}
      >
        {children}
      </button>
    </>
  );
}
