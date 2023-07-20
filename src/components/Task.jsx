export const Task = ({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}) => {
  const resultClassName = completed ? "text-decoration-line-through" : "";
  const lineBtnOnclick = () => {
    toggleDoneTaskFunc(id);
  };
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      {/* <span>{title}</span> */}

      <span className={resultClassName}>{title}</span>
      <button className="btn btn-success" onClick={lineBtnOnclick}>
        Done
      </button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </div>
  );
};
