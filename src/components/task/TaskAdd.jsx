import React, { useState } from "react";

export const TaskAdd = () => {
  const [valueTask, setValueTask] = useState("");
  const onChangeDescription = (event) => {
    setValueTask(event.target.value);
  };

  return (
    <>
      <div className="mb-3 col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Agregar una tarea"
          value={valueTask}
          onChange={(event) => onChangeDescription(event)}
        />
      </div>
      <div className="mb-3 col-5">
        <button className="btn btn-success">AGREGAR</button>
      </div>
    </>
  );
};
