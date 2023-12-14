import React from "react";

const Task = () => {
  return (
    <div className="container py-5" id="featured-3">
      <h2 className="pb-2 border-bottom text-white">MIS TAREAS</h2>
      <div className="row py-5">
        <div className="col-sm-3 gy-3 gx-3">
          <div className="card" style={{ width: "18rem;" }}>
            <div className="card-body">
              <h5 className="card-title ">Tarea N°: 1</h5>
              <p className="card-text" onChange={() => {}}>
                Texto para reemplazar
              </p>

              <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={() => {}}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
