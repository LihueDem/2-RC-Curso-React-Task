import React from "react";

const TaskAdd = () => {
  return (
    <>
      <div class="mb-3 col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Agregar una tarea"
        />
      </div>
      <div class="mb-3 col-5">
        <button className="btn btn-success" onClick={() => {}}>
          AGREGAR
        </button>
      </div>
    </>
  );
};

export default TaskAdd;
