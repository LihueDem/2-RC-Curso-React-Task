import React from "react";
import { TaskCard } from "./TaskCard";
import { TaskAdd } from "./TaskAdd";
import { dataCard } from "../../data/Task";

export const Task = () => {
  return (
    <>
      <div className="container py-5" id="featured-3">
        <h2 className="pb-2 border-bottom text-white">MIS TAREAS</h2>
        <div className="row py-5">
          {dataCard.map((item) => (
            <TaskCard key={item.id} dataCardItem={item} />
          ))}
        </div>
        <TaskAdd />
      </div>
    </>
  );
};
