import React, { useState } from "react";

export const TaskAdd = ({ onClickPadre }) => {
  const [valueTask, setValueTask] = useState("");

  const onChangeDescription = (event) => {
    setValueTask(event.target.value);
    //console.log(valueTask);
  };

  return (
    <>
      <div className="mb-3 col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Agregar una tarea"
          value={valueTask}
          onChange={onChangeDescription}
        />
      </div>

      <div className="mb-3 col-5">
        <button
          className="btn btn-success"
          onClick={() => onClickPadre(valueTask)}
        >
          AGREGAR
        </button>
      </div>
    </>
  );
};

//Esta funcion realiza un callback. Esto es cuando se quiere pasar un valor por una funcion
//onClick={() => onClickPadre()}
